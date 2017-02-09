import { TestBed } from '@angular/core/testing';

import { GiphyComponent } from './giphy.component';

describe('Giphy Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [GiphyComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(GiphyComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Choose a cute');
  });

});
