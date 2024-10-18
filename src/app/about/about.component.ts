import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatButtonModule, FormComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
