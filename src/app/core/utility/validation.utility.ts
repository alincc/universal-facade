import { Validators } from '@angular/forms';

import { Validation } from '../model/scaffold';

export const validatorConversion = {
  AssertFalse: { method: 'pattern', key: 'pattern', value: true },
  AssertTrue: { method: 'pattern', key: 'pattern', value: true },
  DecimalMax: { method: 'max', key: 'max', value: true },
  DecimalMin: { method: 'min', key: 'min', value: true },
  Digits: { method: 'pattern', key: 'pattern', value: /^\d+$/ },
  Future: { method: '', key: '', value: false },
  Max: { method: 'max', key: 'max', value: true },
  MaxLength: { method: 'maxLength', key: 'maxlength', value: true },
  Min: { method: 'min', key: 'min', value: true },
  MinLength: { method: 'minLength', key: 'minlength', value: true },
  NotNull: { method: 'required', key: 'required' },
  Null: { method: '', key: '', value: false },
  Past: { method: '', key: '', value: false },
  Pattern: { method: 'pattern', key: 'pattern', value: true }
};

export const createValidators = (validations: Validation[]): any[] => {
  const validators = [];
  validations.forEach((validation: Validation) => {
    const validator = validatorConversion[validation.name];
    if (validator) {
      if (validator.value) {
        validators.push(Validators[validator.method](validator.value === true ? validation.value : validator.value));
      } else {
        validators.push(Validators[validator.method]);
      }
    } else {
      console.warn('Unknown validation', validation);
    }
  });
  return validators;
};
