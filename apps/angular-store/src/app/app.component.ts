import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiComponent } from '@angular-monorepo/shared-ui';

@Component({
  standalone: true,
  imports: [ RouterModule, SharedUiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-store';
}
