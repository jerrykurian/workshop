import { BaseEntity } from './../../shared';

export class Event implements BaseEntity {
    constructor(
        public id?: number,
        public description?: string,
        public startDate?: any,
        public dueDate?: any,
        public raisedById?: number,
        public assignedToId?: number,
        public statusId?: number,
        public typeId?: number,
    ) {
    }
}
