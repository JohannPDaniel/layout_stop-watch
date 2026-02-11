'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  url: 'https://johannpdaniel.github.io/layout_stop-watch/',
  referenceurl: 'https://johannpdaniel.github.io/layout_stop-watch/',
  testurl: 'https://johannpdaniel.github.io/layout_stop-watch/',
  selector: ['body'],
  misMatchThreshold: 0.4,
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  onBeforeScript: 'puppet/onBefore.js',
  viewports: [
    {
      name: 'tablet_h',
      width: 1024,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Stopwatch started',
      onReadyScript: 'puppet/stopAnimation.js',
    },
    {
      ...basic,
      label: 'Stopwatch before one circle',
      postDOMChangeWait: 5000,
    },
    {
      ...basic,
      label: 'Stopwatch after one circle',
      postDOMChangeWait: 10000,
    },
  ],
};

module.exports = config;
