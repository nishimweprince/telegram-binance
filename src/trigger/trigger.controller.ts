import { Request, Response } from 'express';
import { TriggerService } from './trigger.service';

// INITIALIZE TRIGGER SERVICE
const triggerService = new TriggerService();

export class TriggerController {
  // SEND MESSAGE
  async sendMessage(req: Request, res: Response) {
    const { message } = req.body;
    await triggerService.sendMessageToTelegram(message);
    res.status(200).json({ message: 'Message sent to telegram' });
  }
}
