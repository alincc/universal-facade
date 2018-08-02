import { SdrResourceLinks } from './sdr-resource-links';
import { StructureEntity } from '../structure-entity';

export interface SdrStructureEntity extends StructureEntity {
    readonly _links: SdrResourceLinks;
}
