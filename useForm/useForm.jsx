import  { useState } from 'react';


export const useForm = ( initialObject = {} ) => {

    const [values, setValues] = useState( initialObject );

    const handleInputChange = ({ target }) => {
        setValues({
          ...values,
          [ target.name ]: target.value  
        });
    }

    const resetForm = () => { 
      setValues( initialObject )
    }

    return [ values, handleInputChange, resetForm ];

}
