import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UUIDGenerator } from './uuidgenerator';

describe('UUIDGenerator', () => {
  let component: UUIDGenerator;
  let fixture: ComponentFixture<UUIDGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UUIDGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UUIDGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
