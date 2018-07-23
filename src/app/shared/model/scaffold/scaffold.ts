import { Property } from './property';

export interface Scaffold {
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
}
