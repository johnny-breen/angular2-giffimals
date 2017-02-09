import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GiphyComponent } from './giphy/giphy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'giphy', component: GiphyComponent},
  { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
