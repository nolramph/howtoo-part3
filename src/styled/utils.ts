import { css, FlattenSimpleInterpolation } from "styled-components"

const breakpoints = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
} as const

type Breakpoint = keyof typeof breakpoints

type MediaQueryFunction = (
  literals: TemplateStringsArray,
  ...placeholders: any[]
) => FlattenSimpleInterpolation

export const media: Record<Breakpoint, MediaQueryFunction> = Object.keys(breakpoints).reduce(
  (acc, label) => {
    const prefix = "max-width"
    const size = breakpoints[label as Breakpoint]

    acc[label as Breakpoint] = (literals, ...placeholders) => css`
      @media (${prefix}: ${size}) {
        ${css(literals, ...placeholders)};
      }
    `

    return acc
  },
  {} as Record<Breakpoint, MediaQueryFunction>,
)
