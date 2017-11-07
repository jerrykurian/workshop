import { BaseEntity } from './../../shared';

export class Vendor implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public contactName?: string,
        public contactNumber?: string,
        public dateRegistered?: any,
        public assetsServiceds?: BaseEntity[],
    ) {
    }
}
