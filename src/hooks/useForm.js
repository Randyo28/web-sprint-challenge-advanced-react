// write your custom hook here to control your checkout form
import { useState } from 'react'

const useForm = () => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState({ //set initialValue to empty strings
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChanges = (e) => {
      const {name, value} = e.target //destructed e.target to use name and value

    setValues({ ...values, [name]: value }); //setValues to changed values from selected input name
  };

  const handleSubmit = (e) => { //onSubmit the page will not refresh and successMessage will be set to true
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  //returned the values and function needed for useForm hook using an object
  //setValues and setShowSuccessMessage is not returned since it's being used inside the functions of this hook
  return {values, showSuccessMessage, handleChanges, handleSubmit}  
}

export default useForm;