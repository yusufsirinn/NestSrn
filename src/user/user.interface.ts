import { Document } from 'mongoose';
import { AuditModel } from 'src/tools/models/audit.model';
import { GroupModel } from 'src/tools/models/group.model';
import { RoleModel } from 'src/tools/models/role.model';

export interface IUser extends Document {
    id: string;
    name: string;
    surname: string;
    image: string;
    email: string;
    password: string;
    birtDay: Date;
    audit: AuditModel;
    roles: RoleModel[];
    groups: GroupModel[];
}