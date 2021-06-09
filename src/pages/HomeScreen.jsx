import styled from 'styled-components/macro'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import { ReactComponent as PlusIcon } from '../assets/Create.svg'

export default function HomeScreen({ navigateCreate }) {
  return (
    <Grid>
      <Header text="pandemeet" />
      <CardGrid>
        <Card name="John Doe" date="24.10.2020" />
        <Card name="John Doe" date="24.10.2020" />
        <Card name="John Doe" date="24.10.2020" />
        <Card name="John Doe" date="24.10.2020" />
        <Card name="John Doe" date="24.10.2020" />
        <Card name="John Doe" date="24.10.2020" />
        <Card name="John Doe" date="24.10.2020" />
        <Card name="John Doe" date="24.10.2020" />
        <Card name="John Doe" date="24.10.2020" />
        <Card name="John Doe" date="24.10.2020" />
        <Card name="John Doe" date="24.10.2020" />
        <Card name="John Doe" date="24.10.2020" />
        <Card name="John Doe" date="24.10.2020" />
        <Card name="John Doe" date="24.10.2020" />
      </CardGrid>
      <CreateButton>
        <PlusIcon onClick={navigateCreate} role="button" name="createButton" />
      </CreateButton>
    </Grid>
  )
}

const Grid = styled.main`
  display: grid;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 34px 34px 0;
`

const CardGrid = styled.section`
  padding: 10px 0;
  display: grid;
  gap: 20px;
  overflow-y: scroll;
`

const CreateButton = styled.div`
  display: grid;
  place-items: center;
  padding: 15px;
`
