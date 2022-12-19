import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { IonBackButtonDelegateDirective } from '@ionic/angular/directives/navigation/ion-back-button';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks = [
    {description: 'Comprar pão'},
    {description: 'Escovar os dentes'},
    {description: 'Lavar a louça'},
    {description: 'Lavar a roupa'}
  ];

  constructor(private alertController: AlertController,
              private toastController: ToastController
             ) {}

  async showAdd(){
    const alert = await this.alertController.create({
      header: 'O que deseja fazer?',
      inputs: [
        {
         name: 'task',
         type: 'text',
         placeholder: 'Digite a tarefa'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {console.log('Cancelou...')}
        },
        {
          text: 'Adicionar',
          handler: (form) => {this.incluir(form.task)}
        }
      ]
    });

    alert.present();
  }

  apagar(){

  }

  async incluir(newTask: string){
    if(newTask.trim().length < 1){
      const toast = await this.toastController.create({
        message: 'Informe a Tarefa!!!',
        duration: 2000,
        position: 'top'
      });

      toast.present();
    } else {
      this.tasks.push({description: newTask});
    }
  }
}
