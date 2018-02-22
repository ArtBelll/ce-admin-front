import { Address } from "./address";
import { Contact } from "./contact";

export interface Organisation {
    name: string
    legalName: string;
    email: string;
    workingHours?: string;
    owner: string;
    type: string;
    addresses?: Address[];
    contacts?: Contact[];
}