/// <reference types="react" />
import { type LineChartBicolorPropsType, type bicolorLineDataItem } from './types';
import { type BarAndLineChartsWrapperTypes } from '../utils/types';
interface Points {
    points: string;
    color: string;
}
interface extendedLineChartBicolorPropsType extends LineChartBicolorPropsType {
    parentWidth: number;
}
export declare const useLineChartBiColor: (props: extendedLineChartBicolorPropsType) => {
    toggle: boolean;
    setToggle: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    pointsArray: Points[];
    setPointsArray: import("react").Dispatch<import("react").SetStateAction<Points[]>>;
    fillPointsArray: Points[];
    setFillPointsArray: import("react").Dispatch<import("react").SetStateAction<Points[]>>;
    selectedIndex: number;
    setSelectedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    containerHeight: number;
    noOfSections: number;
    data: bicolorLineDataItem[];
    scrollToEnd: boolean;
    scrollAnimation: boolean;
    scrollEventThrottle: number;
    labelsExtraHeight: number;
    animationDuration: number;
    startIndex1: number;
    endIndex1: number;
    initialData: bicolorLineDataItem[];
    adjustToWidth: boolean;
    initialSpacing: number;
    endSpacing: number;
    thickness: number;
    spacing: number;
    xAxisThickness: number;
    dataPointsHeight1: number;
    dataPointsWidth1: number;
    dataPointsRadius1: number;
    dataPointsColor1: string;
    dataPointsShape1: string;
    areaChart: boolean;
    textFontSize1: number;
    textColor1: string;
    totalWidth: number;
    maxItem: number;
    minItem: number;
    maxValue: number;
    mostNegativeValue: number;
    extendedContainerHeight: number;
    getX: (index: number) => number;
    getY: (index: number) => number;
    yAtxAxis: number;
    stepHeight: number;
    stepValue: number;
    noOfSectionsBelowXAxis: number;
    thickness1: number;
    zIndex: number;
    strokeDashArray1: number[] | undefined;
    rotateLabel: boolean;
    isAnimated: boolean;
    hideDataPoints1: boolean;
    color: string;
    colorNegative: string;
    startFillColor: string;
    endFillColor: string;
    startOpacity: number;
    endOpacity: number;
    startFillColorNegative: string;
    endFillColorNegative: string;
    startOpacityNegative: number;
    endOpacityNegative: number;
    gradientDirection: string;
    showXAxisIndices: boolean;
    xAxisIndicesHeight: number;
    xAxisIndicesWidth: number;
    xAxisIndicesColor: import("react-native").ColorValue;
    xAxisTextNumberOfLines: number;
    horizontalRulesStyle: any;
    showFractionalValues: boolean;
    yAxisLabelWidth: number;
    horizontal: boolean;
    yAxisAtTop: boolean;
    disableScroll: boolean;
    showScrollIndicator: boolean;
    focusEnabled: boolean;
    showDataPointOnFocus: boolean;
    showStripOnFocus: boolean;
    showTextOnFocus: boolean;
    stripHeight: number | undefined;
    stripWidth: number;
    stripColor: any;
    stripOpacity: number;
    unFocusOnPressOut: boolean;
    delayBeforeUnFocus: number;
    horizSections: {
        value: string;
    }[];
    barAndLineChartsWrapperProps: BarAndLineChartsWrapperTypes;
};
export {};
