import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StartseiteComponent } from './startseite/startseite.component';  // Richtig importiert
import { AppRoutingModule } from './app.routing.module'; // Anname: Der Klassenname beginnt mit einem Großbuchstaben.

@NgModule({
  declarations: [
    AppComponent,
    StartseiteComponent,  // Dies ist eine Komponente
  ],
  imports: [
    BrowserModule,  // Dies ist ein Modul, gehört in die 'imports'-Liste
    AppRoutingModule,  // Hier wird das Routing Modul importiert
  ],
  providers: [],
  bootstrap: [AppComponent]  // Starte die Anwendung mit der AppComponent
})
export class AppModule { }

