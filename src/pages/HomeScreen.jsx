import styled from 'styled-components/macro'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import { ReactComponent as PlusIcon } from '../assets/PlusIcon.svg'
import { v4 as uuidv4 } from 'uuid'

export default function HomeScreen({ navigateAdd, cards }) {
  return (
    <Grid>
      <Header text="pandemeet" />
      <CardGrid>
        {cards
          .sort((a, b) => a.date < b.date)
          .map(card => (
            <Card
              key={uuidv4()}
              firstName={card.firstName}
              lastName={card.lastName}
              date={card.date}
              address={card.address}
            />
          ))}
      </CardGrid>
      <CreateButton>
        <PlusIcon onClick={navigateAdd} role="button" name="addButton" />
      </CreateButton>
    </Grid>
  )
}

const Grid = styled.main`
  display: grid;
  grid-template-rows: auto 1fr auto;
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
  align-content: start;
  gap: 20px;
  overflow-y: scroll;
`

const CreateButton = styled.div`
  display: grid;
  place-items: center;
  padding: 15px;
`
