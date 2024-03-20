import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PasswordModule } from 'primeng/password';
import { PrimaryButtonMdComponent } from 'app/components/primary-button-md/primary-button-md.component';
import { CarouselModule } from 'primeng/carousel';


import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputTextModule, 
    ButtonModule, 
    CalendarModule, 
    ToastModule, 
    MessagesModule, 
    FloatLabelModule, 
    FormsModule,
    IconFieldModule,
    InputIconModule,
    PasswordModule,
    PrimaryButtonMdComponent,
    CarouselModule
  ], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService] // Añade MessageService a los proveedores del componente

})
export default class LoginComponent {
  sidebarVisible: boolean = false;

  testimonials = [
    {
      name: 'Juan Pérez',
      text: '¡Excelente servicio! Muy contento con los resultados.',
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      name: 'María Rodríguez',
      text: 'Increíble experiencia. Recomiendo totalmente.',
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png'
    },
    {
      name: 'Pedro Gómez',
      text: '¡Los mejores! No puedo estar más satisfecho.',
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    },
    {
      name: 'Ana López',
      text: '¡Muy buenos profesionales! 100% recomendados.',
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png'
    }
  ];

  messages: any[] = []; // Puedes ajustar el tipo según tus necesidades
  constructor(private messageService: MessageService) {}

  // Método para mostrar el toast
  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: '¡Datos correctos!'
    });
  }
}
