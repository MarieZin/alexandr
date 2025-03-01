interface JQuery {
  alexandr: any;
}

interface JQueryStatic {
  alexandr: any;
}

interface AlexandrSettings {
  minValue?: number;
  maxValue?: number;
  stepValue?: number;
  minPosition: number;
  maxPosition: number;
  showMinMaxValue?: boolean;
  orientation?: 'vertical' | 'horizontal';
  type?: 'single' | 'double';
  showInput?: boolean;
  showValueFlag?: boolean;
  showRuler?: boolean;
  elemForShowValueMin?: JQuery<HTMLElement>;
  elemForShowValueMax?: JQuery<HTMLElement>;
  lineClass?: string;
  progressBarClass?: string;
  thumbClass?: string;
  thumbMinClass?: string;
  thumbMaxClass?: string;
  showMinValueClass?: string;
  showMaxValueClass?: string;
  container?: JQuery<HTMLElement>;
  elemForInputMin?: JQuery<HTMLElement>;
  elemForInputMax?: JQuery<HTMLElement>;
}

interface Model {
  minValue: number;
  maxValue: number;
  minPosition: number;
  maxPosition: number;
  stepValue: number;
  type: 'single' | 'double';
  onThumbsPositionChanged?: (type: 'min' | 'max', position: number) => void;
  onStepValueChenged?: (minValue: number, maxValue: number, stepValue: number) => void;
  onMinMaxValuesChanged?: (minValue: number, maxValue: number) => void;
  init: any;
  setMinValue: (minValue: number) => void;
  setMaxValue: (maxValue: number) => void;
  setStepValue: (stepValue: number) => void;
  setMinPosition: (minPosition: number) => void;
  setMaxPosition: (setMaxPosition: number) => void;
  bindThumbsPositionChanged: (callback: (type: 'min' | 'max', position: number) => void)=> void;
  bindStepValueChanged: (callback: (minValue: number, maxValue: number, stepValue: number) => void)=> void;
  bindMinMaxValuesChanged: (callback: (minValue: number, maxValue: number) => void)=> void
  validatePosition: (value: number)=> number;
  validateDoublePosition: (type: 'min' | 'max', value: number)=> number;
  equateValueToStep: (value: number)=> number;
}

interface BaseSubViewInterface {
  item: JQuery<HTMLElement>;
}

interface SliderRulerView extends BaseSubViewInterface {
  dividings: JQuery<HTMLElement>[];
  countDivivdings: number;
}

interface SliderMinMaxValueLineView {
  wrap: JQuery<HTMLElement>;
  min: JQuery<HTMLElement>;
  max: JQuery<HTMLElement>;
}

type ElementsCoords = {
  left: number;
  width: number;
  top: number;
  height: number;
};

interface View {
  container: JQuery<HTMLElement>;
  slider: JQuery<HTMLElement>;
  sliderLine: BaseSubViewInterface;
  sliderProgressBar: BaseSubViewInterface;
  sliderThumbs: BaseSubViewInterface[];
  sliderOrientation: 'vertical' | 'horizontal';
  sliderInitialValues: [number, number?];
  elemForShowValueMin: JQuery<HTMLElement>;
  elemForShowValueMax: JQuery<HTMLElement>;
  elemForInputMin: JQuery<HTMLElement>;
  elemForInputMax: JQuery<HTMLElement>;
  type: 'single' | 'double';
  showInput: boolean;
  showValueFlag: boolean;
  showRuler: boolean;
  inputs: JQuery<HTMLElement>[];
  thumbClass: string;
  thumbMinClass: string;
  thumbMaxClass: string;
  sliderMinMaxValueLine: SliderMinMaxValueLineView;
  presenter: Presenter;
  sliderRuler: SliderRulerView;
  sliderLength: number;
  init: any;
}

interface Presenter {
  view: View;
  model: Model;
  pixelInOneStep: number;
  moveDirection: 'top' | 'left';
  minThumbPixelPosition: number;
  maxThumbPixelPosition: number;
  setMinMaxValue: () => void;
  setValuesToRuler: () => void;
  onChangeInput: (event: Event) => void;
  onThumbMouseDown: (event: Event) => void;
  onSliderLineClick: (event: Event) => void;
  onRulerClick: (event: Event) => void;
  init: (options: AlexandrSettings) => void;
}
