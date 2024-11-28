import { Telegraf } from 'telegraf';
import { UpdatesService } from './updates/updates.service';
import { TELEGRAM_BOT_TOKEN } from './config/environments.config';

const updatesService = new UpdatesService();

const bot = new Telegraf(String(TELEGRAM_BOT_TOKEN));

bot.launch();

bot.on('message', (ctx) => {
  updatesService.getContext(ctx);
});

export default bot;
