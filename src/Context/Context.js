import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory, useLocation } from "react-router-dom";
import queryString from 'query-string';

const AppProvider = ({ children }) => {
    const history = useHistory();
    const location = useLocation();

    const queryUrl = queryString.parse(location.search);

    let queryToShow;

    if (Object.keys(queryUrl).length === 0) {
        queryToShow = null
    } else {
        queryToShow = queryUrl.search;
    }


    const [state, setState] = useState({
        query: queryToShow,
        id: null,
        items: null,
        detail: null
    })


    const { query, id, items, detail } = state;

    useEffect(() => {
        if (query != null) {
            axios.get(`http://localhost:5000/api/items?query=${query}`)
                .then(function (response) {
                    setState({ ...state, items: response.data })
                    history.push(`/items?search=${query}`);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    history.push('/not-found');
                })
        }
    }, [query])

    useEffect(() => {
        if (id != null) {
            axios.get(`http://localhost:5000/api/items/${id}`)
                .then(function (response) {
                    setState({ ...state, detail: response.data })
                    history.push(`/items/${id}`);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    if (query != null) {
                        history.push('/not-found');
                    }
                })
        }
    }, [id])


    return (
        <>
            <AppContext.Provider value={[state, setState]}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppProvider;
export const AppContext = createContext();

