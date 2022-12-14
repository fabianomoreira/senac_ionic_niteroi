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

  async exibirCustom(){
    const mensagem = await this.alerta.create({
      header: 'Mensagem',
      message: 'Deseja realmente sair?',
      buttons: ['ok', 'cancelar']
    });

    mensagem.present();
  }

  async exibirComplete(){
    const mensagem = await this.alerta.create({
      header: 'Confirma',
      message: 'Confirma a gravação?',
      buttons: [{text: 'ok',
                 handler: () => {
                  console.log('Vou gravar!');
                 }},
                {text: 'cancelar',
                 handler: () => {
                  console.log('Desista!!!');
                 }}]
    });

    mensagem.present();
  }
}
