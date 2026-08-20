// js/cardCompareMain.js
// Entry point.

import { parseUrlIntoState, populateCardSelects, attachEvents, render } from './cardCompareEvents.js';

parseUrlIntoState();
populateCardSelects();
attachEvents();
render();