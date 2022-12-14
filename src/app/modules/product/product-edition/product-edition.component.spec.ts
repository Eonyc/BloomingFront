import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditionComponent } from './product-edition.component';

describe('ProductEditionComponent', () => {
  let component: ProductEditionComponent;
  let fixture: ComponentFixture<ProductEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
