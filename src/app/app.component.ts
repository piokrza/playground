import { NxWelcomeComponent } from './nx-welcome.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { test } from '#core/constant';

const imports = [NxWelcomeComponent, RouterModule];

@Component({
  selector: 'app-root',
  template: `<router-outlet />`,
  styleUrl: './app.component.scss',
  standalone: true,
  imports,
})
export class AppComponent {
  title = test;
}
