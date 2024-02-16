import styled from "styled-components"
import Box from "../box"

type BorderedDivProps = {
  borderColor?: string
  borderPosition?: "top" | "right" | "bottom" | "left" | "all"
  children: React.ReactNode
}

// A utility function to generate border CSS based on props
const generateBorderCSS = (position: BorderedDivProps["borderPosition"], color: string) => {
  switch (position) {
    case "top":
      return `border-top: 25x solid ${color};`
    case "right":
      return `border-right: 5px solid ${color};`
    case "bottom":
      return `border-bottom: 5px solid ${color};`
    case "left":
      return `border-left: 5px solid ${color};`
    case "all":
    default:
      return `border: 5px solid ${color};`
  }
}

const BorderedBox = styled(Box)<BorderedDivProps>`
  ${({ borderColor = "black", borderPosition = "all" }) =>
    generateBorderCSS(borderPosition, borderColor)}
  padding: 0 10px;
`

export default BorderedBox
