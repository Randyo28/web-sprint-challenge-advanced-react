// write your custom hook here to control your checkout form
import { useState } from 'react'

const useForm = () => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChanges = (e) => {
      const {name, value} = e.target

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return {values, showSuccessMessage, handleChanges, handleSubmit}
}

export default useForm;