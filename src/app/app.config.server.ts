import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';

export const config: ApplicationConfig = {
  providers: [
    provideHttpClient(), // Hier fügst du die benötigten Provider hinzu
    // Weitere Provider können hier hinzugefügt werden
  ],
};