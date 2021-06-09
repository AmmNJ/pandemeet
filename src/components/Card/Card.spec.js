import { screen, render } from '@testing-library/react'
import Card from './Card'

describe('Header', () => {
  it('renders the Card and its text elements as defined', () => {
    render(<Card name="John Doe" date="2020-02-02" />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('2020-02-02')).toBeInTheDocument()
  })
})
