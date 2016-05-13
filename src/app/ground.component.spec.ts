import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GroundAppComponent } from '../app/ground.component';

beforeEachProviders(() => [GroundAppComponent]);

describe('App: Ground', () => {
  it('should create the app',
      inject([GroundAppComponent], (app: GroundAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ground works!\'',
      inject([GroundAppComponent], (app: GroundAppComponent) => {
    expect(app.title).toEqual('ground works!');
  }));
});
