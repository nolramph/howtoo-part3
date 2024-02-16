import styled from "styled-components"

//components
import FullBackgroundContainer from "../../components/full-body-background"
import Button from "../../components/button"
import Box from "../../components/box"

//icons
import logo from "../../assets/icons/logo.svg"

//images
import hometopicsBg from "../../assets/images/hometopics-bg.png"

//styled-components
import { Container, LeftPanel } from "../../styled/global"

const HomeTopics = () => {
  return (
    <Container>
      <LeftPanel>
        <Box width="167px">
          <img src={logo} alt="Logo" width="121" height="28" />
        </Box>
        <Box marginTop="150px">
          <h1>lOREM iPSUM DOLOR SIT</h1>
        </Box>
        <HomeTopicsCTA onClick={() => alert("BEGIN IS CLICKED!")}>BEGIN </HomeTopicsCTA>
      </LeftPanel>
      <Box width="100%">
        <FullBackgroundContainer backgroundImage={hometopicsBg} />
      </Box>
    </Container>
  )
}

export default HomeTopics

const HomeTopicsCTA = styled(Button)`
  width: 50%;
  background-color: #55c6d7;
  margin-top: 76px;
`
