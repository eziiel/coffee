import React from 'react'
import { FormAdress } from './components/formAdress'
import { FormRequest } from './components/formRequest'
import * as S from './styled'
import { useForm, FormProvider } from 'react-hook-form'

export const Adress = () => {
  const NewDeliveryForm = useForm()

  const { handleSubmit } = NewDeliveryForm

  const HandleCreateAdress = (data: any) => {
    console.log(data)
  }
  return (
    <S.FormContainer action="" onSubmit={handleSubmit(HandleCreateAdress)}>
      <FormProvider {...NewDeliveryForm}>
        <FormAdress />
        <FormRequest />
      </FormProvider>
    </S.FormContainer>
  )
}
