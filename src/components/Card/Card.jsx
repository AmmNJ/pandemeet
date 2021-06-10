import styled from 'styled-components/macro'

export default function Card({ fullName, date, address }) {
  return (
    <CardLayout>
      <UpperLayout>
        <Name>{fullName}</Name>
        <Date>{date}</Date>
      </UpperLayout>
      <Address>{address}</Address>
    </CardLayout>
  )
}

const CardLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: stretch;
  padding: 10px 20px;
  background-color: #eef0ff;
  align-items: center;
  border-radius: 4px;
  height: 100px;
`

const UpperLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`

const Name = styled.span`
  font-size: 14px;
  font-weight: 600;
`

const Date = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #696ef6;
`

const Address = styled.span`
  font-size: 12px;
`
