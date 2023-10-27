export interface FlexPropsInterface {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  disabled?: boolean;
  justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'safe center'
    | 'unsafe center';
  alignItems?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch'
    | 'end'
    | 'first baseline'
    | 'last baseline'
    | 'normal'
    | 'safe'
    | 'self-end'
    | 'self-start'
    | 'start'
    | 'unsafe';
  alignSelf?:
    | 'auto'
    | 'baseline'
    | 'center'
    | 'first baseline'
    | 'last baseline'
    | 'flex-start'
    | 'flex-end'
    | 'normal'
    | 'safe'
    | 'self-end'
    | 'self-start'
    | 'stretch'
    | 'unsafe';
  alignContent?:
    | 'baseline'
    | 'center'
    | 'end'
    | 'first baseline'
    | 'flex-end'
    | 'flex-start'
    | 'last baseline'
    | 'normal'
    | 'safe'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'stretch'
    | 'unsafe';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  order?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  gap?: string;
  height?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  margin?: string;
  padding?: string;
  zIndex?: number;
}
