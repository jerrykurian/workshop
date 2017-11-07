import { BaseEntity } from './../../shared';

export class Asset implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public code?: string,
    ) {
    }
}
