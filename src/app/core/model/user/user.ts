import { Role } from './role';
import { StructureEntity } from '../structure-entity';

export interface User extends StructureEntity {
    readonly role: Role;
    readonly username: string;
}
