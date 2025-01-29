import SliderView from './View/SliderView';
import SliderPresenter from './Presenter/SliderPresenter';
import SliderModel from './Model/SliderModel';
import './jquery.alexandr.scss';
// import './theme-dark.scss';

(function ($) {
  const defaults: AlexandrSettings = {
    minValue: 0,
    maxValue: 400,
    stepValue: 50,
    showMinMaxValue: true,
    orientation: 'horizontal',
    type: 'double',
    showInput: true,
    showValueFlag: true,
    showRuler: true,
    initialValues: [200, 400],
    elemForShowValueMin: $('.min'),
    elemForShowValueMax: $('.max'),
    lineClass: '',
    progressBarClass: '',
    thumbClass: '',
    thumbMinClass: '',
    thumbMaxClass: '',
    showMinValueClass: '',
    showMaxValueClass: '',
  };

  class Alexandr {
    config: AlexandrSettings;
    view: View;
    model: Model;
    presenter: any;
    init: any;
    constructor(element: any, options: any) {
      this.config = $.extend({}, defaults, options);
      this.config.container = element;
      this.view = new SliderView({ ...this.config });
      this.model = new SliderModel({ ...this.config });
      this.presenter = new SliderPresenter(this.view, this.model);
      this.init();
    }
  }

  Alexandr.prototype.init = function () {
    this.view.init(this.presenter);
    this.presenter.init();
  };

  $.fn.alexandr = function (options): JQuery {
    new Alexandr(this.first(), options);
    return this.first();
  };
})(jQuery);

$('.wrapp').alexandr({});
