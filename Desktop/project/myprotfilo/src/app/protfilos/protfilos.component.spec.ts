import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtfilosComponent } from './protfilos.component';

describe('ProtfilosComponent', () => {
  let component: ProtfilosComponent;
  let fixture: ComponentFixture<ProtfilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtfilosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtfilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
