import { Component } from '@angular/core';
import axios from 'axios';
import { OPENAI_API_KEY } from '@constants/constants';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'manual.page.html',
  styleUrls: ['manual.page.scss']
})
export class ManualPage {
  private isRequestPending = false;
  private requestQueue: (() => void)[] = [];

  constructor(private navCtrl: NavController) {}

  async fazerPergunta() {
    if (this.isRequestPending) {
      this.requestQueue.push(() => this.fazerPergunta());
      return;
    }

    const pergunta = "O que é TOD?";
    try {
      this.isRequestPending = true;
      const resposta = await this.enviarPerguntaAoChatbot(pergunta);
      console.log(resposta);
      // You can display the response on the screen by assigning it to a variable or showing it in an alert, for example.
    } catch (error: any) {
      console.error(error);
      if (error.response && error.response.status === 429) {
        // Retry the request after a delay
        await this.delay(2000); // Adjust the delay time as needed
        await this.fazerPergunta();
      }
    } finally {
      this.isRequestPending = false;
      if (this.requestQueue.length > 0) {
        const nextRequest = this.requestQueue.shift();
        if (nextRequest) {
          nextRequest();
        }
      }
    }
  }

  async enviarPerguntaAoChatbot(pergunta: string) {
    const prompt = pergunta;
    const maxTokens = 50;
    const n = 1;
    const stop = '\n';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    };

    const data = {
      prompt,
      max_tokens: maxTokens,
      n,
      stop
    };

    try {
      const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', data, { headers });
      return response.data.choices[0].text.trim();
    } catch (error: any) {
      throw new Error(`Request failed with status code ${error.response.status}`);
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  goToInclusao() {
    this.navCtrl.navigateForward('/inclusao-page');
  }

  goToDiscriminacao() {
    this.navCtrl.navigateForward('/discriminacao-page');
  }
}
