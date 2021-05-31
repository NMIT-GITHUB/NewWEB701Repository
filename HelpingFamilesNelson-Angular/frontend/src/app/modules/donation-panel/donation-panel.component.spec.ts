import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonationPanelComponent } from './donation-panel.component';

describe('DonationPanelComponent', () => {
  let component: DonationPanelComponent;
  let fixture: ComponentFixture<DonationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
