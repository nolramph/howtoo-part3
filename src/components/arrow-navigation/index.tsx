import { useState } from "react"
import styled, { css } from "styled-components"

//components
import Box from "../box"
import Button from "../button"

//icons
import { FaAngleLeft } from "react-icons/fa6"
import { FaAngleRight } from "react-icons/fa6"

const ArrowNavigation = () => {
  const [activeButton, setActiveButton] = useState<"back" | "next">("back")
  return (
    <NavigationButtonsContainer>
      <StyledPrevNavigationButton
        isActive={activeButton === "back"}
        onClick={() => setActiveButton("back")}
      >
        <FaAngleLeft /> <br />
        Back
      </StyledPrevNavigationButton>
      <StyledNextNavigationButton
        isActive={activeButton === "next"}
        onClick={() => setActiveButton("next")}
      >
        <FaAngleRight /> <br />
        Next
      </StyledNextNavigationButton>
    </NavigationButtonsContainer>
  )
}

export default ArrowNavigation

const NavigationButtonsContainer = styled(Box)`
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
`

const StyledNavigationButton = styled(Button)<{ isActive: boolean }>`
  background: ${({ isActive }) => (isActive ? "#55C6D7" : "#FFF")};
  margin: 0;
  padding: 20px;
  text-transform: uppercase;
  text-align: center;
  width: ${props => (props.isActive ? "95px" : "85px")};
  height: ${props => (props.isActive ? "95px" : "85px")};
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
  bottom: 0;

  &:last-child {
    margin-bottom: 0;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`

const StyledPrevNavigationButton = styled(StyledNavigationButton)<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: 7px 2px 9px -3px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 7px 2px 9px -3px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 7px 2px 9px -3px rgba(0, 0, 0, 0.75);
      z-index: 10;
    `}
`
const StyledNextNavigationButton = styled(StyledNavigationButton)<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: -7px 2px 9px -3px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: -7px 2px 9px -3px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -7px 2px 9px -3px rgba(0, 0, 0, 0.75);
      z-index: 10;
    `}
`
