import { ConditionalType } from './conditional-type';

export interface Conditional {
    type: ConditionalType;
    path: string;
    value: string;
}
