import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworthCardComponent } from './networth-card.component';

describe('NetworthCardComponent', () => {
  let component: NetworthCardComponent;
  let fixture: ComponentFixture<NetworthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworthCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
