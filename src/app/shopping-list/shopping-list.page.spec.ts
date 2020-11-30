import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ShoppingListPage } from './shopping-list.page';

describe('ShoppingListPage', () => {
  let component: ShoppingListPage;
  let fixture: ComponentFixture<ShoppingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
