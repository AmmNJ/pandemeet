import styled from 'styled-components/macro'
import Input from '../Input/Input'

export default function AddMeetingForm({ navigateHome, handleSubmit }) {
  return (
    <FormGrid onSubmit={handleSubmit}>
      <Input
        label="first name"
        type="text"
        name="firstName"
        placeholder="John"
        autoComplete="on"
        maxLength="50"
      />
      <Input
        label="last name"
        type="text"
        name="lastName"
        placeholder="Doe"
        autoComplete="on"
        maxLength="50"
      />
      <Input label="date" type="date" name="date" autoComplete="off" />
      <ButtonGrid>
        <CancelButton onClick={navigateHome}>cancel</CancelButton>
        <AddMeetingButton>add</AddMeetingButton>
      </ButtonGrid>
    </FormGrid>
  )
}

const FormGrid = styled.form`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  gap: 40px;
  align-items: end;
`

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

const AddMeetingButton = styled.button`
  font-weight: 600;
  color: #fff;
  background-color: #696ef6;
  border-radius: 4px;
  border: none;
  height: 40px;
  width: 100%;
`

const CancelButton = styled.button`
  font-weight: 600;
  color: #000;
  background-color: #c4c4c4;
  border-radius: 4px;
  border: none;
  height: 40px;
  width: 100%;
`
