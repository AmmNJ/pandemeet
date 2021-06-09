import Header from '../components/Header/Header'

export default function CreateScreen({ navigateHome }) {
  return (
    <div>
      <Header text="add meeting" />
      <button onClick={navigateHome}>navigate home</button>
    </div>
  )
}
