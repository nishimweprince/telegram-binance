import { Message, Update } from 'telegraf/typings/core/types/typegram';
import { Context, NarrowedContext } from 'telegraf';
import { OllamaService } from '../ollama/ollama.service';

// INITIALIZE OLLAMA SERVICE
const ollamaService = new OllamaService();

export class UpdatesService {
  constructor() {}

  // GET MESSAGE
  async getContext(context: NarrowedContext<Context, Update>) {
    const { message } = context;
    const { text } = message as Message.TextMessage;
    await ollamaService.generate(text);
  }
}
