import { Route, Switch, useHistory } from 'react-router-dom'
import CreateScreen from './pages/CreateScreen'
import HomeScreen from './pages/HomeScreen'

function App() {
  const { push } = useHistory()

  return (
    <Switch>
      <Route path="/create">
        <CreateScreen navigateHome={navigateHome} />
      </Route>
      <Route path="/*">
        <HomeScreen navigateCreate={navigateCreate} />
      </Route>
    </Switch>
  )
  function navigateHome() {
    push('/')
  }

  function navigateCreate() {
    push('/create')
  }
}

export default App
