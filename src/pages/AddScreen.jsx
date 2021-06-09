import styled from 'styled-components/macro'
import AddMeetingForm from '../components/AddMeetingForm/AddMeetingForm'
import Header from '../components/Header/Header'

export default function AddScreen({ navigateHome, cards, setCards }) {
  return (
    <Grid>
      <Header text="add meeting" />
      <AddMeetingForm navigateHome={navigateHome} handleSubmit={handleSubmit} />
    </Grid>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { name, date } = form.elements
    const card = { name: name.value, date: date.value }
    setCards([card, ...cards])
    form.reset()
    navigateHome()
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
