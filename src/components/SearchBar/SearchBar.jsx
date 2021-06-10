import Input from '../Input/Input'

export default function SearchBar({ searchValue, onSearchChange }) {
  return (
    <Input
      label="search person"
      type="text"
      name="search"
      placeholder="John Doe"
      maxLength="30"
      value={searchValue}
      onChange={onSearchChange}
    />
  )
}
