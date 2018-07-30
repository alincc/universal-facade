import { Property } from './property';

export type Scaffold = Readonly<{
    name: string;
    properties: Property[];
}>;
