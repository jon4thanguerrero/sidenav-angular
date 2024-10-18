import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { API_URL} from './../constants';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, HttpClientModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      let url = new URL("users/login", API_URL).toString();
      console.log(url)
      console.log(API_URL)
      try {
        const response = await firstValueFrom(
          this.http.post(url, formData)
        );
        console.log('Respuesta del servidor:', response);
      } catch (error) {
        console.error('Error al enviar los datos:', error);
      }
    }
  }   
}
