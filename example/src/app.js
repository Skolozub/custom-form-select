import { CustomFormSelect, SelectArrow } from 'custom-form-select';
import React, { useReducer } from 'react';

import { paymentOptions, profOptions, techOptions } from './options';
import { initialState, selectsReducer } from './reducer';

function App() {
  const [ state, dispatch ] = useReducer(selectsReducer, initialState)
  const { techValue, profValue, paymentValue } = state

  function handleChange(type) {
    return value => dispatch({ type, payload: value })
  }

  return (
    <>
      <CustomFormSelect
        icon={ SelectArrow }
        maxVisibleOptions={ 4 }
        name="technology"
        optionHeight={ 40 }
        options={ techOptions }
        optionsPosition="fixed"
        value={ techValue }
        onChange={ handleChange('SET_TECH') }
      />
      <CustomFormSelect
        maxVisibleOptions={ 5 }
        name="profession"
        optionHeight={ 40 }
        options={ profOptions }
        optionsPosition="relative"
        value={ profValue }
        onChange={ handleChange('SET_PROF') }
      />
      <CustomFormSelect
        maxVisibleOptions={ 2 }
        name="profession"
        optionHeight={ 40 }
        options={ paymentOptions }
        optionsPosition="relative"
        value={ paymentValue }
        onChange={ handleChange('SET_PAYMENT') }
      />
    </>
  )
}

export default App