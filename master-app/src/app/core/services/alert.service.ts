import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()

export class AlertService {

  constructor(private toastController: ToastController) {}

  async showErrorPassword() {
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña incorrectos',
      duration: 3000, // Duración del mensaje en milisegundos (3 segundos en este caso)
      position: 'top', // Posición en la pantalla ('top', 'bottom', 'middle')
      color: 'danger', // Color del mensaje (puedes personalizarlo)
      buttons: [],
    });

    await toast.present();
  }
  
}