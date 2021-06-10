import Input from '../Input/Input'

export default function SearchBar({ searchValue, onSearchChange }) {
  return (
    <Input
      label="search"
      type="text"
      name="search"
      placeholder="Enter the person you are searching for ..."
      maxLength="30"
      value={searchValue}
      onChange={onSearchChange}
    />
  )
}
