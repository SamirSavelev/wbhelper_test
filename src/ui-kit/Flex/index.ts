import styled from "styled-components";
import { FlexPropsInterface } from "./types";

const Flex = styled.div<FlexPropsInterface>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  order: ${({ order }) => order};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-basis: ${({ flexBasis }) => flexBasis};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  align-content: ${({ alignContent }) => alignContent};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  z-index: ${({ zIndex }) => zIndex};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

export default Flex;
