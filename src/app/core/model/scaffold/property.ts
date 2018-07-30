import { Validation } from './validation';

export type Property = Readonly<{
    name: string;
    clazz: string;
    gloss: string;
    type: string;
    help: string;
    options: any[];
    autocomplete: string;
    autofocus: boolean;
    hidden: boolean;
    disabled: boolean;
    validations: Validation[];
}>;
