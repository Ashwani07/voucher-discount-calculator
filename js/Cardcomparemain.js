// js/cardCompareMain.js
// Entry point.

import { parseUrlIntoState, populateCardSelects, attachEvents, render, renderFilters, renderScenarios } from './cardCompareEvents.js';

parseUrlIntoState();
renderScenarios();
renderFilters();
populateCardSelects();
attachEvents();
render();