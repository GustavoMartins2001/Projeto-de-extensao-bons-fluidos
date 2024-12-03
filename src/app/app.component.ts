import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './componentes/spinner/spinner.component';

@Component({
  imports: [CommonModule, RouterModule, SpinnerComponent],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'projeto-bons-fluidos';
}
