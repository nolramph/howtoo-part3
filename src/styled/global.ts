import styled from "styled-components"

//styled utils
import { media } from "./utils"

import Box from "../components/box"

export const Container = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;

  ${media.tablet`
    flex-direction: column;
  `}
`

export const LeftPanel = styled(Box)<{ background?: string }>`
  max-width: 413px;
  width: 100%;
  background: ${({ background }) => background || "#172843"};
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 70px;

  ${media.tablet`
    max-width: -webkit-fill-available;
    height: 100%''
  `}
`

export const ImageContainer = styled(Box)`
  width: 100%;

  ${media.tablet`
    display: none;
  `}
`
