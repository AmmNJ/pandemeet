import Header from '../components/Header/Header'

export default function HomeScreen({ navigateCreate }) {
  return (
    <div>
      <Header text="pandemeet" />
      <button onClick={navigateCreate}>navigate create</button>
    </div>
  )
}
