import { useEffect, useState, useRef, MouseEvent } from "react"
import styled from "styled-components"

//components
import Box from "../box"

//context
import { useVideoOverlay } from "../../context/video-player-overlay-context"

//icons
import logo from "../../assets/icons/logo.svg"
import handPointingRight from "../../assets/icons/hand-point-right.svg"

//images
import globe from "../../assets/images/globe.png"

//styled utils
import { media } from "../../styled/utils"

//video
import howtooVideo from "../../assets/videos/howtoo-video.mp4"

const VideoOverlay = () => {
  const [isPaused, setIsPaused] = useState<boolean>(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { enabledInitialVideo, setEnabledInitialVideo } = useVideoOverlay()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPaused(false)
    const handlePause = () => setIsPaused(true)

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)

    return () => {
      if (video) {
        video.removeEventListener("play", handlePlay)
        video.removeEventListener("pause", handlePause)
      }
    }
  }, [])

  const handleOverlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  console.log("enabledInitialVideo", enabledInitialVideo)
  return (
    <>
      {enabledInitialVideo && (
        <BaseOverlay>
          <FullScreenVideo ref={videoRef} loop controls>
            <source src={howtooVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </FullScreenVideo>
          <Overlay isVisible={isPaused} onClick={handleOverlayClick}>
            <OverlayContent>
              <OverlayDetails>
                <h1>LOREM IPSUM</h1>
                <Box>
                  <img src={logo} alt="Logo" style={{ width: "50%" }} />
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  gap="24px"
                  cursor="pointer"
                  width="fit-content"
                  onClick={(e: MouseEvent<HTMLDivElement>) => {
                    setEnabledInitialVideo(!enabledInitialVideo)
                    e.stopPropagation()
                  }}
                >
                  <img src={handPointingRight} alt="hand-pointing-right" />
                  <>Click begin to get started.</>
                </Box>
              </OverlayDetails>
              <Box width="50%">
                <img src={globe} alt="globe" style={{ width: "100%" }} />
              </Box>
            </OverlayContent>
          </Overlay>
        </BaseOverlay>
      )}
    </>
  )
}

export default VideoOverlay

const BaseOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #172843;
  z-index: 12;
`

const FullScreenVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100vh;

  ${media.tablet`
    width: 100%;
    height: 100vh;
  `}
`

const Overlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  color: white;
`
const OverlayContent = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  ${media.tablet`
    flex-direction: column;
    text-align: center;

     div:first-child {
        order: 2;
    }

    div:nth-child(2) {
      order: 1;
      padding-top: 20px;
    }
  `}
`
const OverlayDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  height: 100%;
  width: 50%;
`
