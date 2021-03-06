import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useEffectApi = (key, url, setState, state, push, stateToChange) => {
  const history = useHistory();
  const baseUrl = 'http://localhost:5000/api/items';

  useEffect(() => {
    // We evaluate if the key is different from null and make the request to API
    if (key != null) {
      axios
        .get(`${baseUrl}${url}`)
        .then((response) => {
          // If the request is correct, we set the status and redirect to the desired view.
          setState({ ...state, [stateToChange]: response.data });
          history.push(`${push}`);
        })
        .catch((error) => {
          // handle error
          history.push('/not-found');
          throw new Error(error);
        });
    }
  }, [key]);
};

export default useEffectApi;
