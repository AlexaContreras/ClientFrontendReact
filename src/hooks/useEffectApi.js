import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useEffectApi = (key, url, setState, state, push, stateToChange) => {
  const history = useHistory();
  const baseUrl = 'http://localhost:5000/api/items';

  useEffect(() => {
    if (key != null) {
      axios
        .get(`${baseUrl}${url}`)
        .then((response) => {
          setState({ ...state, [stateToChange]: response.data });
          history.push(`${push}`);
        })
        .catch((error) => {
          // handle error
          console.log(error);
          history.push('/not-found');
        });
    }
  }, [key]);
};

export default useEffectApi;
