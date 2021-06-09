import styled from 'styled-components/macro'

export default function Card({ firstName, lastName, date }) {
  return (
    <CardLayout>
      <Name>
        {firstName} {lastName}
      </Name>
      <Date>{date}</Date>
    </CardLayout>
  )
}

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 10px 20px;
  background-color: #eef0ff;
  align-items: center;
  justify-content: left;
  border-radius: 4px;
  height: 80px;
`

const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
`

const Date = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #696ef6;
`
