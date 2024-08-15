import { enableProdMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ServerModule } from '@angular/platform-server';
import { APP_BASE_HREF } from '@angular/common';


const config = {
  providers: [
    provideRouter([]),
  ],
};

const bootstrap = () => {
  // Server-Bootstrap-Logik hier
};

export default bootstrap; // Standard-Export
