import styled from 'styled-components/macro'

export default function Input({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  ...props
}) {
  return (
    <InputGrid>
      <InputLabel>
        <InputLabelText>{label}</InputLabelText>
        <InputElement
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
      </InputLabel>
    </InputGrid>
  )
}

const InputGrid = styled.div`
  display: grid;
  place-items: left;
  gap: 20px;
`

const InputElement = styled.input`
  font-size: 14px;
  width: 100%;
  border: none;
  padding: 17px;
  border-radius: 4px;
  background: #eeeeee;
  input::focus {
    border-color: #696ef6;
  }
`

const InputLabel = styled.label`
  font-size: 18px;
`
const InputLabelText = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: left;
`
