import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { Vendor } from './vendor.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class VendorService {

    private resourceUrl = SERVER_API_URL + 'api/vendors';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(vendor: Vendor): Observable<Vendor> {
        const copy = this.convert(vendor);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(vendor: Vendor): Observable<Vendor> {
        const copy = this.convert(vendor);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Vendor> {
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
     * Convert a returned JSON object to Vendor.
     */
    private convertItemFromServer(json: any): Vendor {
        const entity: Vendor = Object.assign(new Vendor(), json);
        entity.dateRegistered = this.dateUtils
            .convertDateTimeFromServer(json.dateRegistered);
        return entity;
    }

    /**
     * Convert a Vendor to a JSON which can be sent to the server.
     */
    private convert(vendor: Vendor): Vendor {
        const copy: Vendor = Object.assign({}, vendor);

        copy.dateRegistered = this.dateUtils.toDate(vendor.dateRegistered);
        return copy;
    }
}
