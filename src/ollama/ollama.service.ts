import ollama from 'ollama';
import { OLLAMA_MODEL } from '../config/environments.config';
import { getTradeSymbolInstruction } from './ollama.helper';

export class OllamaService {
  constructor() {}

  async generate(prompt: string) {
    const response = await ollama.generate({
      model: OLLAMA_MODEL,
      prompt: getTradeSymbolInstruction(prompt),
      stream: false,
    });
    return JSON.parse(response?.response);
  }
}
