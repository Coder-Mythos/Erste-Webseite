import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartseiteComponent } from '../app/startseite/startseite.component';

const routes: Routes = [
  {
    path:'startseite', component:StartseiteComponent
  },
  {
   path:'', redirectTo:'startseite', pathMatch: 'full'
  }     // Wenn der Pfad leer ist (z.B. wenn der Benutzer auf die Haupt-URL zugreift),
        // wird automatisch eine Weiterleitung zur Route 'startseite' durchgeführt.
        // Das 'pathMatch: 'full'' stellt sicher, dass der leere Pfad ('') vollständig mit der URL übereinstimmen muss,
         // bevor die Umleitung stattfindet. Dies bedeutet, dass nur die leere URL (ohne zusätzliche Segmente) umgeleitet wird.
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
