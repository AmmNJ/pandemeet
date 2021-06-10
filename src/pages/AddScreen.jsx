import { useState } from 'react'
import styled from 'styled-components/macro'
import AddMeetingForm from '../components/AddMeetingForm/AddMeetingForm'
import Header from '../components/Header/Header'
import getAddress from '../services/getAddress'

export default function AddScreen({ navigateHome, cards, setCards }) {
  const [locationStatus, setLocationStatus] = useState('')
  const [addressValue, setAddressValue] = useState('')

  return (
    <Grid>
      <Header text="add meeting" />
      <AddMeetingForm
        navigateHome={navigateHome}
        handleSubmit={handleSubmit}
        getLocation={getLocation}
        locationStatus={locationStatus}
        addressValue={addressValue}
        onAddressChange={onAddressChange}
      />
    </Grid>
  )

  function onAddressChange(e) {
    setAddressValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const { firstName, lastName, date, address } = form.elements
    const card = {
      firstName: firstName.value,
      lastName: lastName.value,
      fullName: `${firstName.value} ${lastName.value}`,
      date: date.value,
      address: address.value,
    }
    setCards([card, ...cards])
    navigateHome()
  }

  function getLocation() {
    if (!navigator.geolocation) {
      setLocationStatus('Geolocation is not supported by your browser')
    } else {
      setLocationStatus('Locating...')
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocationStatus(null)
          getAddress(
            setAddressValue,
            position.coords.latitude,
            position.coords.longitude
          )
        },
        () => {
          setLocationStatus('Unable to retrieve your location')
        }
      )
    }
  }
}

const Grid = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 34px;
`
