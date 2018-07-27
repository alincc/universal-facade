import { FormActions, FormActionTypes } from './form.actions';

export interface FormState {
    submitting: boolean;
    response: any;
    error: any;
}

export const initialState: FormState = {
    submitting: false,
    response: undefined,
    error: undefined
};

export function reducer(state = initialState, action: FormActions): FormState {
    switch (action.type) {
        case FormActionTypes.SUBMIT:
            return {
                ...state,
                submitting: true,
                error: undefined,
                response: undefined
            };
        case FormActionTypes.SUBMIT_SUCCESS:
            return {
                ...state,
                submitting: false,
                error: undefined,
                response: undefined
            };
        case FormActionTypes.SUBMIT_FAILURE:
            return {
                ...state,
                submitting: false,
                error: action.payload.error,
                response: undefined
            };
        default:
            return state;
    }
}

export const isFormSubmitting = (state: FormState) => state.submitting;
export const getFormError = (state: FormState) => state.error;
export const getFormResponse = (state: FormState) => state.response;
