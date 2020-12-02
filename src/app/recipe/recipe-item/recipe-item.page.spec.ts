import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeItemPage } from './recipe-item.page';

describe('RecipeItemPage', () => {
  let component: RecipeItemPage;
  let fixture: ComponentFixture<RecipeItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
