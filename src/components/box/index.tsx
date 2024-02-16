import styled from "styled-components"

/**  Utility function to convert camelCase to kebab-case **/
const camelToKebabCase = (str: string) =>
  str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)

const StyledBox = styled.div.attrs(props => {
  const propsAny = props as any

  const style = Object.keys(propsAny).reduce((acc: Record<string, any>, key) => {
    /**  Convert camelCase keys to kebab-case for CSS properties **/
    const cssKey = camelToKebabCase(key)
    acc[cssKey] = propsAny[key]
    return acc
  }, {} as React.CSSProperties)

  return { style }
})``

type BoxProps = Record<string, any>

const Box = (props: BoxProps) => <StyledBox {...props} />

export default Box
