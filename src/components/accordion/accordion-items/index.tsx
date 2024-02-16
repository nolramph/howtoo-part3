import styled from "styled-components"

//components
import Box from "../../box"

//icons
import { FaAngleDown } from "react-icons/fa6"
import { FaAngleUp } from "react-icons/fa6"

type AccordionItemProps = {
  title: string
  isOpen: boolean
  onClick: () => void
  children: React.ReactNode
}

const AccordionItem = ({ title, isOpen, onClick, children }: AccordionItemProps) => {
  return (
    <Box marginBottom="14px">
      <TitleBox onClick={onClick}>
        <span>{title}</span>
        <span>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
      </TitleBox>
      {isOpen && <ContentBox>{children}</ContentBox>}
    </Box>
  )
}

export default AccordionItem

const TitleBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background: #55c6d7;
  padding: 15px 23px 15px 33px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`
const ContentBox = styled(Box)`
  width: 100%;
  padding: 25px 23px 25px 33px;
  background: #fff;
`
