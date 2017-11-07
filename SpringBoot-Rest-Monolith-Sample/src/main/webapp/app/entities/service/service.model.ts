import { BaseEntity } from './../../shared';

export class Service implements BaseEntity {
    constructor(
        public id?: number,
        public startDate?: any,
        public dueDate?: any,
        public completedDate?: any,
        public note?: string,
        public assetUnderServiceId?: number,
        public servicingVendorId?: number,
    ) {
    }
}
