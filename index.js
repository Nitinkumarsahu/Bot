const { Client } = require('whatsapp-web.js');
const aish = new Client();
const zariLink = require('qrcode-terminal');
const botTag = "**Aish's Fan Bot**";

/* GENERATE QUERY */

aish.on('qr', creds => {
	zariLink.generate(creds, { small: true });
	console.log('[BOOT]: Waiting for access!');
});

/* READY EVENT */

aish.on('ready', () => {
	console.log('[BOOT]: AishBot has been initialized!');
});

aish.initialize();

aish.on('message', msg => {
	if(msg.body === '!test') {
		message.reply('Test completed, fuck.');
	}
});
