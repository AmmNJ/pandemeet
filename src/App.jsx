import { useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import AddScreen from './pages/AddScreen'
import HomeScreen from './pages/HomeScreen'

function App() {
  const { push } = useHistory()
  const [cards, setCards] = useState([])
  return (
    <Switch>
      <Route path="/add">
        <AddScreen
          navigateHome={navigateHome}
          cards={cards}
          setCards={setCards}
        />
      </Route>
      <Route path="/*">
        <HomeScreen navigateAdd={navigateAdd} cards={cards} />
      </Route>
    </Switch>
  )

  function navigateHome() {
    push('/')
  }

  function navigateAdd() {
    push('/add')
  }
}

export default App
