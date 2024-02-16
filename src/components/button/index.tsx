import { CSSProperties } from "react"
import styled from "styled-components"

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  className?: string
  styles?: CSSProperties
}

const Button = ({ children, onClick, className = "", styles }: ButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  padding: 16px;
  margin: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 800;
`
