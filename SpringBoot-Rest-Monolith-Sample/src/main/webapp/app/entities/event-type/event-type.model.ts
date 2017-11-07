import { BaseEntity } from './../../shared';

export class EventType implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
    ) {
    }
}
