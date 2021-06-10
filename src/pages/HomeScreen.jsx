import styled from 'styled-components/macro'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import Card from '../components/Card/Card'
import { ReactComponent as PlusIcon } from '../assets/PlusIcon.svg'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function HomeScreen({ navigateAdd, cards }) {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  useEffect(() => {
    const filteredCards = cards.filter(card =>
      card.fullName.toLowerCase().includes(searchValue)
    )
    setSearchResults(filteredCards)
  }, [cards, searchValue, setSearchValue])

  function onSearchChange(event) {
    setSearchValue(event.target.value)
  }
  return (
    <Grid>
      <Header text="pandemeet" />
      <SearchBar searchValue={searchValue} onSearchChange={onSearchChange} />
      <CardGrid>
        {searchResults
          .sort((a, b) => a.date < b.date)
          .map(card => (
            <Card
              key={uuidv4()}
              fullName={card.fullName}
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
  grid-template-rows: auto auto 1fr auto;
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
