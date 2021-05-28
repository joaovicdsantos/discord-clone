import { Component } from '@angular/core';
import { Message } from './message/message';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  messages: Message[] = [];

  constructor() {
    this.messages = MESSAGES;
  }

  active(e: any): void {
    this.clearActive();
    e.currentTarget.classList.add('active');
  }
  clearActive() {
    document.querySelectorAll('.button-modal').forEach((button) => {
      button.classList.remove('active');
    });
  }
}

const MESSAGES: Message[] = [
  {
    username: 'h4vook',
    userUrlImg:
      'https://cdn.discordapp.com/avatars/617170999686856704/03f7b794dcb871cf9872c737f71709f1.png?size=128',
    message: `__Respeite os membros, converse de forma racional:__ \n \n 1.1: Não será tolerado membros xingando um ao outro.\n 1.2: Usar 70% de CAPS LOCK na frase poderá ser removida automaticamente pelo nosso bot de moderação.\n 1.3: É proibido mais de 5 menções - mencionar 1 vez já é o suficiente.\n 1.4: Não pertube os membros.\n 1.5: Não polua nenhum chat com Flood e Spam \n\n __Conteúdos inadequados:__\n2.1: Está terminantemente proibido conteúdo pornográfico, violências, gore, assédios, abusos com mulheres, e etc.\n2.2: Está proibido discussões sobre políticas, homofobia, xenofobia, e outros assuntos correlatos.\n2.3: Está proibido fazer Scam/Raid no servidor, sujeito a banimento permanente do servidor.\n2.4: Proibido o uso de apelidos que contenham Zalgo,  Nome invisível, Nome de bots, Números aleatórios, e/ou qualquer outro tipo de material ofensivo. Isso vale também para foto de perfil.\n2.5: Que fique claro que não aceitamos qualquer outro tipo de repercussão no servidor.\n\n__Divulgações, discussões paralelas:__\n3.1: Está proibido divulgações de outros servidores de Discord,\ne divulgações de sites (Permitido apenas com autorização da equipe).\n3.2: É proibido divulgações terceirizadas, e sites que podem danificar outros usuários.\n3.3: Também está proibido divulgações por Mensagem Direta de um membro do servidor.\n3.4: Qualquer discussão paralela no bate-papo está proibido.\n3.5: Está proibido falar de assuntos relacionados a política ou afins.`,
    date: '05/10/2020',
  },
];
