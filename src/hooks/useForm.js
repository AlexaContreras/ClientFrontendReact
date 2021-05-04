import { useState } from 'react';
// This hook is used to set the values for the forms;
const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  // Resets the form values
  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  };

  // Handles changes in input elements
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};

export default useForm;
