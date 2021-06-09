import styled from 'styled-components/macro'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'

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
      <button onClick={navigateCreate}>navigate create</button>
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
  padding: 34px;
`

const CardGrid = styled.section`
  padding: 10px 0;
  display: grid;
  gap: 20px;
  overflow-y: scroll;
`
