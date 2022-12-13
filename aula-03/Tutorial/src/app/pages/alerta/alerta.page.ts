import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alerta: AlertController) { }

  ngOnInit() {
  }

  async exibir(){
    const mensagem = await this.alerta.create({
      header: 'Alerta',
      subHeader: 'Mensagem',
      message: 'Olá usuário monstro',
      buttons: ['ok']
    });

    mensagem.present();
  }
}
