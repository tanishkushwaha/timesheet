import { FormControl, Input, FormErrorMessage } from "@chakra-ui/react"
import { CSSProperties } from "react";

type Props = {
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
  errorMessage?: string;
  isRequired?: boolean;
  style?: CSSProperties,
  disabled?: boolean,
}

const InputField = ({ name, value, type = "text", placeholder, onChange, error = false, errorMessage = 'This field is required.', isRequired = false, style, disabled }: Props) => {
  return (
    <FormControl isInvalid={error} isRequired={isRequired}>
      <Input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} style={style} disabled={disabled} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

export default InputField