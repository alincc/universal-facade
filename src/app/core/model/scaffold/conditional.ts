import { ConditionalType } from './conditional-type';

export type Conditional = Readonly<{
    type: ConditionalType;
    path: string;
    value: string;
}>;
