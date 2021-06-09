import styled from 'styled-components/macro'

export default function Input({
  label,
  type,
  name,
  value,
  placeholder,
  autoComplete,
  onChange,
  ...props
}) {
  return (
    <InputGrid>
      <InputLabel>
        <InputLabelText>{label}</InputLabelText>
        <InputField
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={onChange}
          {...props}
        />
      </InputLabel>
    </InputGrid>
  )
}

const InputGrid = styled.div`
  display: grid;
  place-items: center;
  gap: 20px;
`

const InputField = styled.input`
  font-size: 14px;
  border: none;
  padding: 4px;
  border-radius: 4px;
  background: #eeeeee;
`

const InputLabel = styled.label`
  font-size: 18px;
`
const InputLabelText = styled.div`
  text-align: left;
`
