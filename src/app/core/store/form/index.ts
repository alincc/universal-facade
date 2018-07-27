import {
    createSelector,
    createFeatureSelector
} from '@ngrx/store';

import * as fromForm from './form.reducer';

export const selectFormState = createFeatureSelector<fromForm.FormState>('form');

export const selectFormIsSubmitting = createSelector(selectFormState, fromForm.isFormSubmitting);
export const selectFormResponse = createSelector(selectFormState, fromForm.getFormResponse);
export const selectFormError = createSelector(selectFormState, fromForm.getFormError);
