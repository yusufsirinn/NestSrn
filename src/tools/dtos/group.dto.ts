import { RoleDto } from "./role.dto";

export class GroupCreateDto {
    name: string;

}

export class GroupRolesDto {
    roles: RoleDto[];
}