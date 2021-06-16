import styled from 'styled-components/macro'
import Header from '../components/Header/Header'
import Input from '../components/Input/Input'
import Card from '../components/Card/Card'
import { ReactComponent as PlusIcon } from '../assets/PlusIcon.svg'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function HomeScreen({ navigateAdd, cards }) {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [typeaheadResults, setTypeaheadResults] = useState([])
  const [isResultSelected, setIsResultSelected] = useState(false)

  useEffect(() => {
    const filteredCards = cards.filter(card =>
      card.fullName.toLowerCase().includes(searchValue.toLowerCase())
    )

    setSearchResults(filteredCards)

    if (searchValue.length > 1) {
      const fullNameArray = filteredCards.map(item => item.fullName)
      const uniqueFullNameArray = [...new Set(fullNameArray)]
      setTypeaheadResults(uniqueFullNameArray)
    }
  }, [cards, searchValue, setSearchValue])

  return (
    <Grid>
      <Header text="pandemeet" />
      <SearchContainer>
        <Input
          label="search"
          type="text"
          name="search"
          placeholder="Enter the person you are searching for ..."
          maxLength="28"
          value={searchValue}
          onChange={onSearchChange}
        />
        <TypeaheadList>
          {!isResultSelected &&
            typeaheadResults.length > 0 &&
            typeaheadResults.slice(0, 5).map(fullName => (
              <li
                key={uuidv4()}
                onClick={() => onResultSelected(fullName)}
                role="button"
              >
                {fullName}
              </li>
            ))}
        </TypeaheadList>
      </SearchContainer>
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
      <AddButton>
        <PlusIcon onClick={navigateAdd} role="button" name="addButton" />
      </AddButton>
    </Grid>
  )

  function onSearchChange(e) {
    const inputValue = e.target.value
    setSearchValue(inputValue)
    setIsResultSelected(false)
    setTypeaheadResults([])
  }

  function onResultSelected(selectedResult) {
    setSearchValue(selectedResult)
    setIsResultSelected(true)
  }
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

const SearchContainer = styled.div`
  position: relative;
`

const TypeaheadList = styled.ul`
  font-size: 14px;
  color: #696ef6;
  background-color: #ffffff;
  box-shadow: 4px 8px 10px #cccccc;
  width: 100%;
  position: absolute;
  z-index: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: 4px;
  li {
    padding: 10px 20px;
    border-bottom: 1px solid #c7ceff;
  }
  li:last-child {
    border: none;
  }
`

const CardGrid = styled.section`
  padding: 10px 0;
  display: grid;
  align-content: start;
  gap: 20px;
  overflow-y: scroll;
`

const AddButton = styled.div`
  display: grid;
  place-items: center;
  padding: 15px;
`
