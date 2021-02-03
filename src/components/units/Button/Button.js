import React from 'react'
import { StyledButton } from './styles'

const Button = ({
  type,
  text,
  className,
  textStyles
}
) => {
  return (
    <StyledButton
      type={type}
      text={text}
      className={className}
    >
      <span style={{ ...textStyles }}>{text}</span>
    </StyledButton>
  )
}

export default Button
