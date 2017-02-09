import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApiService } from './shared';
import { routing } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GiphyComponent }       from './giphy/giphy.component';
import { GiphyService }         from './giphy/giphy.service';
import { GiphyModalComponent }       from './giphy/giphy.modal.component';
import { SafePipe } from './shared/safe.pipe';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GiphyComponent,
    GiphyModalComponent,
    SafePipe
  ],
  providers: [
    ApiService,
    GiphyService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
