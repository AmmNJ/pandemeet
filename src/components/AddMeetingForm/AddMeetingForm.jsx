import styled from 'styled-components/macro'
import Input from '../Input/Input'
import { ReactComponent as CurrentLocationIcon } from '../../assets/CurrentLocation.svg'

export default function AddMeetingForm({
  navigateHome,
  handleSubmit,
  getLocation,
  locationStatus,
  addressValue,
  onAddressChange,
}) {
  return (
    <FormGrid onSubmit={handleSubmit}>
      <Input
        label="first name"
        type="text"
        name="firstName"
        placeholder="John"
        autoComplete="on"
        maxLength="14"
        required
      />
      <Input
        label="last name"
        type="text"
        name="lastName"
        placeholder="Doe"
        autoComplete="on"
        maxLength="14"
        required
      />
      <Input label="date" type="date" name="date" autoComplete="off" />
      <LocationInputGrid>
        <Input
          label="address"
          type="text"
          name="address"
          value={addressValue}
          onChange={onAddressChange}
          placeholder="Reeperbahn 1, 20359 Hamburg, Deutschland"
          autoComplete="on"
          maxLength="100"
          required
        />
        <CurrentLocationIcon onClick={getLocation} />
        <LocationStatus>{locationStatus}</LocationStatus>
      </LocationInputGrid>
      <LicenseText>
        © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright
      </LicenseText>

      <ButtonGrid>
        <CancelButton onClick={navigateHome}>cancel</CancelButton>
        <AddMeetingButton>add</AddMeetingButton>
      </ButtonGrid>
    </FormGrid>
  )
}

const FormGrid = styled.form`
  display: grid;
  grid-template-rows: auto auto auto auto 1fr;
  gap: 20px;
  align-items: end;
`

const LocationInputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 5px;
  align-items: end;
`
const LocationStatus = styled.span`
  font-size: 10px;
`

const LicenseText = styled.span`
  font-size: 10px;
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
