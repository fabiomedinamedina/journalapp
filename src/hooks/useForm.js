import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formsValidation, setFormsValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [ formState ]);
  

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckValues = {};

    for (const formField of Object.keys( formValidations )) {
      const [ fn, errorMessage ] = formValidations[ formField ];
      formCheckValues[ `${ formField }Valid` ] = fn( formState[ formField ] ) ? null : errorMessage; 
    }

    setFormsValidation( formCheckValues );
  };

  const isFormValid = useMemo( () => {
    for (const formValue of Object.keys( formsValidation )) {
      if( formsValidation[formValue] !== null ) return false;
    }

    return true;
  }, [ formsValidation  ])

  return {
    ...formState,
    ...formsValidation,
    formState,
    onInputChange,
    onResetForm,
    isFormValid
  };
};
