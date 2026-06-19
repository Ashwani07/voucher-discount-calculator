// Shared mutable UI state. Modules read/write through this object so the app
// can stay split without prop-drilling.
export const state = {
  currentBrandId: null,
  isFirstCalculate: true,
  lastCustomCalc: null,
  lastPortalRenderKey: ''
};