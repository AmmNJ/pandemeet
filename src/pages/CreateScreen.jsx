import styled from 'styled-components/macro'
import Header from '../components/Header/Header'

export default function CreateScreen({ navigateHome }) {
  return (
    <Grid>
      <Header text="add meeting" />
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
