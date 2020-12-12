import { ActivityModel } from "tools/models/activity.model";
import { AuditModel } from "tools/models/audit.model";
import { InventoryModel } from "tools/models/inventory.model";
import { TicketTypeModel } from "tools/models/ticket-type.model";

export class TicketCreateDto {
    name: string;
    description: string;
    type: TicketTypeModel;
    audit: AuditModel;
    activities: ActivityModel[];
    inventories: InventoryModel[];
}