import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react"

type VideoOverlayContextType = {
  enabledInitialVideo: boolean
  setEnabledInitialVideo: Dispatch<SetStateAction<boolean>>
}

const defaultValue: VideoOverlayContextType = {
  enabledInitialVideo: true,
  setEnabledInitialVideo: () => {},
}

const VideoOverlayContext = createContext<VideoOverlayContextType>(defaultValue)

export const useVideoOverlay = () => useContext(VideoOverlayContext)

export const VideoOverlayProvider = ({ children }: { children: ReactNode }) => {
  const [enabledInitialVideo, setEnabledInitialVideo] = useState<boolean>(true)

  return (
    <VideoOverlayContext.Provider value={{ enabledInitialVideo, setEnabledInitialVideo }}>
      {children}
    </VideoOverlayContext.Provider>
  )
}
