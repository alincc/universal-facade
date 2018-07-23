import { Conditional } from './conditional';
import { Filter } from './filter';
import { Header } from './header';
import { Role } from '../user';
import { Validation } from './validation';

export interface Property {
    name: string;
    clazz: string;
    gloss: string;
    type: string;
    help: string;
    options: any[];
    path: string;
    proxy: string;
    template: string;
    autocomplete: string;
    autofocus: boolean;
    hidden: boolean;
    disabled: boolean;
    collection: boolean;
    join: boolean;
    column: boolean;
    facet: boolean;
    validate: boolean;
    length: number;
    header: Header;
    filters: Filter[];
    conditionals: Conditional[];
    validations: Validation[];
    whitelist: Role[];
    blacklist: Role[];
}
