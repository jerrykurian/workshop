import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { EventResponseTime } from './event-response-time.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class EventResponseTimeService {

    private resourceUrl = SERVER_API_URL + 'api/event-response-times';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(eventResponseTime: EventResponseTime): Observable<EventResponseTime> {
        const copy = this.convert(eventResponseTime);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(eventResponseTime: EventResponseTime): Observable<EventResponseTime> {
        const copy = this.convert(eventResponseTime);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<EventResponseTime> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to EventResponseTime.
     */
    private convertItemFromServer(json: any): EventResponseTime {
        const entity: EventResponseTime = Object.assign(new EventResponseTime(), json);
        entity.assignedDate = this.dateUtils
            .convertDateTimeFromServer(json.assignedDate);
        entity.unassignDate = this.dateUtils
            .convertDateTimeFromServer(json.unassignDate);
        return entity;
    }

    /**
     * Convert a EventResponseTime to a JSON which can be sent to the server.
     */
    private convert(eventResponseTime: EventResponseTime): EventResponseTime {
        const copy: EventResponseTime = Object.assign({}, eventResponseTime);

        copy.assignedDate = this.dateUtils.toDate(eventResponseTime.assignedDate);

        copy.unassignDate = this.dateUtils.toDate(eventResponseTime.unassignDate);
        return copy;
    }
}
