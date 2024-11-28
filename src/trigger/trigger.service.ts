import bot from '../bot';
import { TELEGRAM_CHAT_ID } from '../config/environments.config';

export class TriggerService {
  constructor() {}

  // SEND MESSAGE TO TELEGRAM
  async sendMessageToTelegram(message: string) {
    bot.telegram.sendMessage(String(TELEGRAM_CHAT_ID), message);
  }
}
