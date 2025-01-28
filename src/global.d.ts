interface JQuery {
  alexandr(props?: object): JQuery;
}

interface AlexandrSettings {
  minValue: number;
  maxValue: number;
  stepValue: number;
  showMinMaxValue: boolean;
  orientation: 'vertical' | 'horizontal';
  type: 'single' | 'double';
  showInput: boolean;
  showValueFlag: boolean;
  showRuler: boolean;
  initialValues: [number, number?];
  elemForShowValueMin: JQuery<Element>;
  elemForShowValueMax: JQuery<Element>;
  lineClass: string;
  progressBarClass: string;
  thumbClass: string;
  thumbMinClass: string;
  thumbMaxClass: string;
  showMinValueClass: string;
  showMaxValueClass: string;
}
