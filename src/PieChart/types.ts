import { type ColorValue } from 'react-native'
import { type FontStyle } from 'react-native-svg'

export interface PieChartPropsType {
  radius?: number
  isThreeD?: boolean
  donut?: boolean
  innerRadius?: number
  shadow?: boolean
  innerCircleColor?: ColorValue
  innerCircleBorderWidth?: number
  innerCircleBorderColor?: ColorValue
  shiftInnerCenterX?: number
  shiftInnerCenterY?: number
  shadowColor?: string
  shadowWidth?: number
  strokeWidth?: number
  strokeColor?: string
  backgroundColor?: string
  data: pieDataItem[]
  semiCircle?: boolean

  showText?: boolean
  textColor?: string
  textSize?: number
  fontStyle?: FontStyle
  fontWeight?: string
  font?: string
  showTextBackground?: boolean
  textBackgroundColor?: string
  textBackgroundRadius?: number
  showValuesAsLabels?: boolean

  centerLabelComponent?: Function
  tiltAngle?: string
  initialAngle?: number
  labelsPosition?: 'onBorder' | 'outward' | 'inward' | 'mid'
  showGradient?: boolean
  gradientCenterColor?: string
  onPress?: Function
  focusOnPress?: boolean
  toggleFocusOnPress?: boolean
  selectedIndex?: number
  setSelectedIndex?: Function
  sectionAutoFocus?: boolean
  onLabelPress?: Function
  extraRadiusForFocused?: number
  inwardExtraLengthForFocused?: number
  pieInnerComponent?: (item?: pieDataItem, index?: number) => any
  pieInnerComponentHeight?: number
  pieInnerComponentWidth?: number
  paddingHorizontal?: number
  paddingVertical?: number
  isAnimated?: boolean
  startAngle?: number
  endAngle?: number
  curvedEdges?: boolean
  edgesRadius?: number
}
export interface pieDataItem {
  value: number
  shiftX?: number
  shiftY?: number
  color?: string
  gradientCenterColor?: string
  text?: string
  textColor?: string
  textSize?: number
  fontStyle?: FontStyle
  fontWeight?: string
  font?: string
  textBackgroundColor?: string
  textBackgroundRadius?: number
  shiftTextX?: number
  shiftTextY?: number
  shiftTextBackgroundX?: number
  shiftTextBackgroundY?: number
  labelPosition?: 'onBorder' | 'outward' | 'inward' | 'mid'
  onPress?: Function
  onLabelPress?: Function
  strokeWidth?: number
  strokeColor?: string
  focused?: boolean
  peripheral?: boolean
  pieInnerComponent?: (item?: pieDataItem, index?: number) => any
  isStartEdgeCurved?: boolean
  isEndEdgeCurved?: boolean
  startEdgeRadius?: number
  endEdgeRadius?: number
}

export interface PieChartMainProps extends PieChartPropsType {
  setSelectedIndex: Function
  isBiggerPie?: boolean
  paddingHorizontal: number
  paddingVertical: number
  extraRadiusForFocused: number
}
