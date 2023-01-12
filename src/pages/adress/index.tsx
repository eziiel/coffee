import React from 'react'
import { FormAdress } from './components/formAdress'
import { FormRequest } from './components/formRequest'
import * as S from './styled'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { ContextAdressProvider } from './contextAdress/context'
import { ContextCoffees } from '../../context/context'

const formValidatorSchema = zod.object({
  bairro: zod.string().min(5),
  cep: zod.string().min(8).max(9),
  cidade: zod.string().min(5),
  complemento: zod.string().optional(),
  numero: zod.string().min(2).max(6),
  rua: zod.string().min(5),
  uf: zod.string().min(2).max(2),
  payType: zod.string().min(3),
  coffees: zod.number().min(1).max(20),
})

export type NewAdressFormData = zod.infer<typeof formValidatorSchema>

export const Adress = () => {
  const NewDeliveryForm = useForm({
    resolver: zodResolver(formValidatorSchema),
    defaultValues: {
      bairro: '',
      cep: '',
      cidade: '',
      complemento: '',
      numero: '',
      rua: '',
      uf: '',
      payType: '',
      coffees: 0,
    },
  })
  const { amountCoffes } = React.useContext(ContextCoffees)
  const { handleSubmit, setValue } = NewDeliveryForm

  const HandleCreateAdress = (data: NewAdressFormData) => {
    console.log(data)
  }

  React.useEffect(() => {
    return setValue('coffees', amountCoffes)
  }, [amountCoffes, setValue])

  const setValueType = (type: string) => {
    setValue('payType', type)
  }
  return (
    <S.FormContainer action="" onSubmit={handleSubmit(HandleCreateAdress)}>
      <ContextAdressProvider>
        <FormProvider {...NewDeliveryForm}>
          <FormAdress setValueType={setValueType} />
          <FormRequest />
        </FormProvider>
      </ContextAdressProvider>
    </S.FormContainer>
  )
}
