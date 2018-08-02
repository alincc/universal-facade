import { Role } from './role';
import { SdrStructureEntity } from '../sdr/sdr-structure-entity';

export interface User extends SdrStructureEntity {
    readonly role: Role;
    readonly username: string;
}
