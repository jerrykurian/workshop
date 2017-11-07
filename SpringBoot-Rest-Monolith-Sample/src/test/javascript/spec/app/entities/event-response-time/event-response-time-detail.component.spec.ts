/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { AssetsmgmtTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { EventResponseTimeDetailComponent } from '../../../../../../main/webapp/app/entities/event-response-time/event-response-time-detail.component';
import { EventResponseTimeService } from '../../../../../../main/webapp/app/entities/event-response-time/event-response-time.service';
import { EventResponseTime } from '../../../../../../main/webapp/app/entities/event-response-time/event-response-time.model';

describe('Component Tests', () => {

    describe('EventResponseTime Management Detail Component', () => {
        let comp: EventResponseTimeDetailComponent;
        let fixture: ComponentFixture<EventResponseTimeDetailComponent>;
        let service: EventResponseTimeService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AssetsmgmtTestModule],
                declarations: [EventResponseTimeDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    EventResponseTimeService,
                    JhiEventManager
                ]
            }).overrideTemplate(EventResponseTimeDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(EventResponseTimeDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(EventResponseTimeService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new EventResponseTime(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.eventResponseTime).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
