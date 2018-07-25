import { Property } from './property';

export type Scaffold = Readonly<{
    name: string;
    numberOfColumns: number;
    allowCreate: boolean;
    allowDelete: boolean;
    readOnly: boolean;
    image: string;
    title: string;
    subTitle: string;
    noticeHeader: string;
    notice: string;
    note: string;
    properties: Property[];
}>;
