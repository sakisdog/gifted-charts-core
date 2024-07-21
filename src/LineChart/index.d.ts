/// <reference types="react" />
import { type LineChartPropsType, type lineDataItem } from './types';
import { type BarAndLineChartsWrapperTypes, EdgePosition, type LineSegment } from '../utils/types';
import { type Animated } from 'react-native';
export interface extendedLineChartPropsType extends LineChartPropsType {
    animations?: Animated.Value[];
    parentWidth: number;
}
export declare const useLineChart: (props: extendedLineChartPropsType) => {
    curvature: number;
    curveType: import("../utils/types").CurveType;
    scrollX: number;
    setScrollX: import("react").Dispatch<import("react").SetStateAction<number>>;
    arrow1Points: string;
    setArrow1Points: import("react").Dispatch<import("react").SetStateAction<string>>;
    arrow2Points: string;
    setArrow2Points: import("react").Dispatch<import("react").SetStateAction<string>>;
    arrow3Points: string;
    setArrow3Points: import("react").Dispatch<import("react").SetStateAction<string>>;
    arrow4Points: string;
    setArrow4Points: import("react").Dispatch<import("react").SetStateAction<string>>;
    arrow5Points: string;
    setArrow5Points: import("react").Dispatch<import("react").SetStateAction<string>>;
    secondaryArrowPoints: string;
    setSecondaryArrowPoints: import("react").Dispatch<import("react").SetStateAction<string>>;
    pointerIndex: number;
    setPointerIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    pointerX: number;
    setPointerX: import("react").Dispatch<import("react").SetStateAction<number>>;
    pointerY: number;
    setPointerY: import("react").Dispatch<import("react").SetStateAction<number>>;
    pointerItem: lineDataItem | undefined;
    setPointerItem: import("react").Dispatch<import("react").SetStateAction<lineDataItem | undefined>>;
    pointerY2: number;
    setPointerY2: import("react").Dispatch<import("react").SetStateAction<number>>;
    pointerItem2: lineDataItem | undefined;
    setPointerItem2: import("react").Dispatch<import("react").SetStateAction<lineDataItem | undefined>>;
    pointerY3: number;
    setPointerY3: import("react").Dispatch<import("react").SetStateAction<number>>;
    pointerItem3: lineDataItem | undefined;
    setPointerItem3: import("react").Dispatch<import("react").SetStateAction<lineDataItem | undefined>>;
    pointerY4: number;
    setPointerY4: import("react").Dispatch<import("react").SetStateAction<number>>;
    pointerItem4: lineDataItem | undefined;
    setPointerItem4: import("react").Dispatch<import("react").SetStateAction<lineDataItem | undefined>>;
    pointerY5: number;
    setPointerY5: import("react").Dispatch<import("react").SetStateAction<number>>;
    pointerYsForDataSet: number[];
    setPointerYsForDataSet: import("react").Dispatch<import("react").SetStateAction<number[]>>;
    pointerItem5: lineDataItem | undefined;
    setPointerItem5: import("react").Dispatch<import("react").SetStateAction<lineDataItem | undefined>>;
    secondaryPointerY: number;
    setSecondaryPointerY: import("react").Dispatch<import("react").SetStateAction<number>>;
    secondaryPointerItem: undefined;
    setSecondaryPointerItem: import("react").Dispatch<import("react").SetStateAction<undefined>>;
    responderStartTime: number;
    setResponderStartTime: import("react").Dispatch<import("react").SetStateAction<number>>;
    responderActive: boolean;
    setResponderActive: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    points: string;
    setPoints: import("react").Dispatch<import("react").SetStateAction<string>>;
    points2: string;
    setPoints2: import("react").Dispatch<import("react").SetStateAction<string>>;
    points3: string;
    setPoints3: import("react").Dispatch<import("react").SetStateAction<string>>;
    points4: string;
    setPoints4: import("react").Dispatch<import("react").SetStateAction<string>>;
    points5: string;
    setPoints5: import("react").Dispatch<import("react").SetStateAction<string>>;
    secondaryPoints: string;
    setSecondaryPoints: import("react").Dispatch<import("react").SetStateAction<string>>;
    fillPoints: string;
    setFillPoints: import("react").Dispatch<import("react").SetStateAction<string>>;
    fillPoints2: string;
    setFillPoints2: import("react").Dispatch<import("react").SetStateAction<string>>;
    fillPoints3: string;
    setFillPoints3: import("react").Dispatch<import("react").SetStateAction<string>>;
    fillPoints4: string;
    setFillPoints4: import("react").Dispatch<import("react").SetStateAction<string>>;
    fillPoints5: string;
    setFillPoints5: import("react").Dispatch<import("react").SetStateAction<string>>;
    secondaryFillPoints: string;
    setSecondaryFillPoints: import("react").Dispatch<import("react").SetStateAction<string>>;
    pointsFromSet: string[];
    setPointsFromSet: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    fillPointsFromSet: string[];
    setFillPointsFromSet: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    arrowPointsFromSet: string[];
    setArrowPointsFromSet: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    selectedIndex: number;
    setSelectedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    noOfSections: number;
    containerHeight: number;
    data: lineDataItem[];
    data2: lineDataItem[];
    data3: lineDataItem[];
    data4: lineDataItem[];
    data5: lineDataItem[];
    secondaryData: lineDataItem[] | import("..").barDataItem[];
    dataSet: import("../utils/types").DataSet[] | undefined;
    data0: lineDataItem[] | undefined;
    scrollToEnd: boolean;
    scrollAnimation: boolean;
    scrollEventThrottle: number;
    labelsExtraHeight: number;
    animationDuration: number;
    onDataChangeAnimationDuration: number;
    animateTogether: boolean;
    animateOnDataChange: boolean;
    startIndex1: number;
    startIndex2: number;
    endIndex1: number;
    endIndex2: number;
    startIndex3: number;
    endIndex3: number;
    startIndex4: number;
    endIndex4: number;
    startIndex5: number;
    endIndex5: number;
    lineSegments: LineSegment[] | undefined;
    lineSegments2: LineSegment[] | undefined;
    lineSegments3: LineSegment[] | undefined;
    lineSegments4: LineSegment[] | undefined;
    lineSegments5: LineSegment[] | undefined;
    highlightedRange: import("../utils/types").HighlightedRange | undefined;
    adjustToWidth: boolean;
    initialSpacing: number;
    endSpacing: number;
    thickness: number;
    yAxisLabelWidth: number;
    spacing: number;
    xAxisThickness: number;
    dataPointsHeight1: number;
    dataPointsWidth1: number;
    dataPointsRadius1: number;
    dataPointsColor1: string;
    dataPointsShape1: string;
    dataPointsHeight2: number;
    dataPointsWidth2: number;
    dataPointsRadius2: number;
    dataPointsColor2: string;
    dataPointsShape2: string;
    dataPointsHeight3: number;
    dataPointsWidth3: number;
    dataPointsRadius3: number;
    dataPointsColor3: string;
    dataPointsShape3: string;
    dataPointsHeight4: number;
    dataPointsWidth4: number;
    dataPointsRadius4: number;
    dataPointsColor4: string;
    dataPointsShape4: string;
    dataPointsHeight5: number;
    dataPointsWidth5: number;
    dataPointsRadius5: number;
    dataPointsColor5: string;
    dataPointsShape5: string;
    areaChart: boolean;
    areaChart1: boolean;
    areaChart2: boolean;
    areaChart3: boolean;
    areaChart4: boolean;
    areaChart5: boolean;
    atLeastOneAreaChart: boolean;
    getIsNthAreaChart: (n: number) => boolean;
    stepChart: boolean;
    stepChart1: boolean;
    stepChart2: boolean;
    stepChart3: boolean;
    stepChart4: boolean;
    stepChart5: boolean;
    edgePosition: EdgePosition;
    textFontSize1: number;
    textFontSize2: number;
    textFontSize3: number;
    textFontSize4: number;
    textFontSize5: number;
    textColor1: string;
    textColor2: string;
    textColor3: string;
    textColor4: string;
    textColor5: string;
    totalWidth: number;
    maxValue: number;
    mostNegativeValue: number;
    overflowTop: number;
    extendedContainerHeight: number;
    getX: (index: number) => number;
    getY: (value: number) => number;
    secondaryMaxValue: number;
    getSecondaryY: (value: number) => number;
    heightUptoXaxis: number;
    setPointsOnChange: () => void;
    showValuesAsDataPointsText: boolean;
    thickness1: number;
    thickness2: number;
    thickness3: number;
    thickness4: number;
    thickness5: number;
    zIndex1: number;
    zIndex2: number;
    zIndex3: number;
    zIndex4: number;
    zIndex5: number;
    strokeDashArray1: number[] | undefined;
    strokeDashArray2: number[] | undefined;
    strokeDashArray3: number[] | undefined;
    strokeDashArray4: number[] | undefined;
    strokeDashArray5: number[] | undefined;
    rotateLabel: boolean;
    isAnimated: boolean;
    hideDataPoints1: boolean;
    hideDataPoints2: boolean;
    hideDataPoints3: boolean;
    hideDataPoints4: boolean;
    hideDataPoints5: boolean;
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
    startFillColor1: string;
    endFillColor1: string;
    startOpacity: number;
    endOpacity: number;
    startOpacity1: number;
    endOpacity1: number;
    startFillColor2: string;
    endFillColor2: string;
    startOpacity2: number;
    endOpacity2: number;
    startFillColor3: string;
    endFillColor3: string;
    startOpacity3: number;
    endOpacity3: number;
    startFillColor4: string;
    endFillColor4: string;
    startOpacity4: number;
    endOpacity4: number;
    startFillColor5: string;
    endFillColor5: string;
    startOpacity5: number;
    endOpacity5: number;
    arrowLength1: number;
    arrowWidth1: number;
    arrowStrokeWidth1: number;
    arrowStrokeColor1: import("react-native").ColorValue;
    arrowFillColor1: import("react-native").ColorValue;
    showArrowBase1: boolean;
    arrowLength2: number;
    arrowWidth2: number;
    arrowStrokeWidth2: number;
    arrowStrokeColor2: import("react-native").ColorValue;
    arrowFillColor2: import("react-native").ColorValue;
    showArrowBase2: boolean;
    arrowLength3: number;
    arrowWidth3: number;
    arrowStrokeWidth3: number;
    arrowStrokeColor3: import("react-native").ColorValue;
    arrowFillColor3: import("react-native").ColorValue;
    showArrowBase3: boolean;
    arrowLength4: number;
    arrowWidth4: number;
    arrowStrokeWidth4: number;
    arrowStrokeColor4: import("react-native").ColorValue;
    arrowFillColor4: import("react-native").ColorValue;
    showArrowBase4: boolean;
    arrowLength5: number;
    arrowWidth5: number;
    arrowStrokeWidth5: number;
    arrowStrokeColor5: import("react-native").ColorValue;
    arrowFillColor5: import("react-native").ColorValue;
    showArrowBase5: boolean;
    arrowLengthsFromSet: number[] | undefined;
    arrowWidthsFromSet: number[] | undefined;
    arrowStrokeWidthsFromSet: number[] | undefined;
    arrowStrokeColorsFromSet: import("react-native").ColorValue[] | undefined;
    arrowFillColorsFromSet: import("react-native").ColorValue[] | undefined;
    showArrowBasesFromSet: boolean[] | undefined;
    secondaryLineConfig: {
        zIndex: number;
        curved: boolean | undefined;
        curvature: number;
        curveType: import("../utils/types").CurveType;
        areaChart: boolean;
        color: import("react-native").ColorValue;
        thickness: number;
        zIndex1: number;
        strokeDashArray: number[] | undefined;
        startIndex: number;
        endIndex: number;
        hideDataPoints: boolean;
        dataPointsHeight: number;
        dataPointsWidth: number;
        dataPointsRadius: number;
        dataPointsColor: string;
        dataPointsShape: string;
        showValuesAsDataPointsText: boolean;
        startFillColor: string;
        endFillColor: string;
        startOpacity: number;
        endOpacity: number;
        textFontSize: number;
        textColor: string;
        showArrow: boolean | undefined;
        arrowConfig: import("../utils/types").arrowConfigType | undefined;
    };
    addLeadingAndTrailingPathForAreaFill: (initialPath: string, value: number, dataLength: number) => string;
    getNextPoint: (data: lineDataItem[], index: number, around: boolean, before: boolean) => string;
    getStepPath: (data: lineDataItem[], i: number) => string;
    getSegmentPath: (data: lineDataItem[], i: number, lineSegment: LineSegment[] | undefined, startIndex: number, endIndex: number, isSecondary?: boolean) => string;
    gradientDirection: string;
    horizSections: {
        value: string;
    }[];
    stepHeight: number;
    stepValue: number;
    noOfSectionsBelowXAxis: number;
    showXAxisIndices: boolean;
    xAxisIndicesHeight: number;
    xAxisIndicesWidth: number;
    xAxisIndicesColor: import("react-native").ColorValue;
    xAxisTextNumberOfLines: number;
    xAxisLabelsVerticalShift: number;
    horizontalRulesStyle: any;
    showFractionalValues: boolean;
    horizontal: boolean;
    yAxisAtTop: boolean;
    pointerConfig: import("../utils/types").Pointer | undefined;
    getPointerProps: Function | null;
    pointerHeight: number;
    pointerWidth: number;
    pointerRadius: number;
    pointerColor: import("react-native").ColorValue;
    pointerComponent: Function | null;
    showPointerStrip: boolean;
    pointerStripHeight: number;
    pointerStripWidth: number;
    pointerStripColor: import("react-native").ColorValue;
    pointerStripUptoDataPoint: boolean;
    pointerLabelComponent: Function | null;
    stripOverPointer: boolean;
    shiftPointerLabelX: number;
    shiftPointerLabelY: number;
    pointerLabelWidth: number;
    pointerLabelHeight: number;
    autoAdjustPointerLabelPosition: boolean;
    pointerVanishDelay: number;
    activatePointersOnLongPress: boolean;
    activatePointersDelay: number;
    initialPointerIndex: number;
    initialPointerAppearDelay: number;
    persistPointer: boolean;
    hidePointer1: boolean;
    hidePointer2: boolean;
    hidePointer3: boolean;
    hidePointer4: boolean;
    hidePointer5: boolean;
    hideSecondaryPointer: boolean;
    resetPointerOnDataChange: boolean;
    pointerEvents: import("../utils/types").PointerEvents | undefined;
    disableScroll: boolean;
    showScrollIndicator: boolean;
    focusEnabled: boolean;
    showDataPointOnFocus: boolean;
    showStripOnFocus: boolean;
    showTextOnFocus: boolean;
    showDataPointLabelOnFocus: boolean;
    stripHeight: number | undefined;
    stripWidth: number;
    stripColor: any;
    stripOpacity: number;
    stripStrokeDashArray: number[] | undefined;
    unFocusOnPressOut: boolean;
    delayBeforeUnFocus: number;
    containerHeightIncludingBelowXAxis: number;
    lineGradient: boolean;
    lineGradientDirection: string;
    lineGradientStartColor: string;
    lineGradientEndColor: string;
    getPointerY: (value: number) => number;
    initialisePointers: () => void;
    barAndLineChartsWrapperProps: BarAndLineChartsWrapperTypes;
    yAxisExtraHeightAtTop: number;
};
