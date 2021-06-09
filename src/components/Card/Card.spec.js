import { screen, render } from '@testing-library/react'
import Card from './Card'

describe('Header', () => {
  it('renders the Card and its text elements as defined', () => {
    render(<Card name="John Doe" date="20.10.2020" />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('20.10.2020')).toBeInTheDocument()
  })
})
