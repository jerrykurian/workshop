import { BaseEntity } from './../../shared';

export class EventResponseTime implements BaseEntity {
    constructor(
        public id?: number,
        public assignedDate?: any,
        public unassignDate?: any,
        public eventOwnerId?: number,
    ) {
    }
}
