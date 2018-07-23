import { Role } from './role';
import { StructureEntity } from '../structure-entity';

export interface User extends StructureEntity {
    role: Role;
    username: string;
}
