import styled from 'styled-components/macro'

export default function Header({ text }) {
  return (
    <HeaderLayout>
      <Heading>{text}</Heading>
    </HeaderLayout>
  )
}

const HeaderLayout = styled.header`
  display: grid;
  place-items: center;
`

const Heading = styled.h1`
  font-weight: 600;
  margin: 0 0 15px;
`
