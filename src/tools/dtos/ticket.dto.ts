import { ActivityModel } from "src/tools/models/activity.model";
import { AuditModel } from "src/tools/models/audit.model";
import { InventoryModel } from "src/tools/models/inventory.model";
import { TicketTypeModel } from "src/tools/models/ticket-type.model";

export class TicketCreateDto {
    name: string;
    description: string;
    type: TicketTypeModel;
    audit: AuditModel;
    activities: ActivityModel[];
    inventories: InventoryModel[];
}