import styled from "styled-components"

//components
import FullBackgroundContainer from "../../components/full-body-background"
import Box from "../../components/box"
import VideoOverlay from "../../components/video-player"

//context
import { VideoOverlayProvider } from "../../context/video-player-overlay-context"

//icons
import logo from "../../assets/icons/logo.svg"

//images
import homebg from "../../assets/images/home-bg.png"

//styled-components
import { Container, LeftPanel, ImageContainer } from "../../styled/global"

const Home = () => (
  <VideoOverlayProvider>
    <Container>
      <LeftPanel>
        <Box marginLeft="30px">
          <img src={logo} alt="Logo" width="364" height="88" />
        </Box>
        <HomeContent>
          <p>lOREM iPSUM</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisl elit.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo elit. Donec
            condimentum odio ut ante bibendum, quis egestas quam semper.
          </p>
          <p>
            Donec tempus cursus magna a feugiat. Morbi scelerisque euismod aliquet. Integer ut
            euismod risus. Aenean a diam vel nisl accumsan cursus.
          </p>
          <p>
            Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac convallis. Ut eleifend sit amet
            justo eu laoreet.
          </p>
        </HomeContent>
      </LeftPanel>
      <ImageContainer>
        <FullBackgroundContainer backgroundImage={homebg} />
      </ImageContainer>
      <VideoOverlay />
    </Container>
  </VideoOverlayProvider>
)

export default Home

const HomeContent = styled(Box)`
  margin-top: 70px;
  p {
    margin-bottom: 30px;
  }
`
