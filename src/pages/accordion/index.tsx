import styled from "styled-components"

//components
import Accordion from "../../components/accordion"
import FullBackgroundContainer from "../../components/full-body-background"
import Box from "../../components/box"
import ArrowNavigation from "../../components/arrow-navigation"
import BorderedBox from "../../components/bordered-box"

//images
import accordionbg from "../../assets/images/accordion-bg.png"

//styled-components
import { Container, LeftPanel } from "../../styled/global"

//utils
import { generateAccordionItems } from "../../utils/helper-utils"

const AccordionPage = () => (
  <Container>
    <StyledLeftPanel>
      <Box fontSize="18px">
        <h1>Nulla imperdiet</h1>
        <p>Vestibulum dapibus hendrerit nibh ut ornare.</p>
        <BorderedBox borderColor="#55C6D7" borderPosition="left">
          <p>Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet.</p>
        </BorderedBox>
      </Box>
    </StyledLeftPanel>
    <Box width="100%">
      <FullBackgroundContainer backgroundImage={accordionbg}>
        <Box position="relative" height="100%">
          <AccordionContainer>
            <p>Montserrat</p>
            <Accordion items={generateAccordionItems(7)} />
          </AccordionContainer>
          <ArrowNavigation />
        </Box>
      </FullBackgroundContainer>
    </Box>
  </Container>
)

export default AccordionPage

const StyledLeftPanel = styled(LeftPanel)`
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(90deg, rgba(0, 0, 0, 1) 80%, rgba(255, 255, 255, 1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(0, 0, 0, 1) 80%, rgba(255, 255, 255, 1) 100%);
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 80%, rgba(255, 255, 255, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#ffffff",GradientType=1);

  h1 {
    margin-bottom: 40px;
  }
  p {
    font-size: 18px;
  }
`
const AccordionContainer = styled(Box)`
  font-size: 18px;
  padding: 53px 30px;
  max-width: 555px;
  p {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }
`
