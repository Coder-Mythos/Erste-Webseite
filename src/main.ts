import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { StartseiteComponent } from './app/startseite/startseite.component';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
