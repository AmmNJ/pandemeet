import styled from 'styled-components/macro'
import Input from '../Input/Input'

export default function AddMeetingForm({ navigateHome, handleSubmit }) {
  return (
    <FormGrid onSubmit={handleSubmit}>
      <Input
        label="name"
        type="text"
        name="name"
        placeholder="John Doe"
        autoComplete="on"
        maxLength="50"
      />
      <Input
        label="date"
        type="date"
        name="date"
        autoComplete="off"
        maxLength="50"
      />
      <ButtonGrid>
        <CancelButton onClick={navigateHome}>cancel</CancelButton>
        <AddMeetingButton>add</AddMeetingButton>
      </ButtonGrid>
    </FormGrid>
  )
}

const FormGrid = styled.form`
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 50px;
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
