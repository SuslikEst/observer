const Mail = function () {
	this._count = 0;
	this.sendMsg = () => {
		console.log('Msg sent', this._count += 1);
	};
};
const MailClient = function () {
	this.mails = [];
	this.addMail = (mail) => {
		this.mails.push(mail);
	};
	this.sendSpam = () => {
		this.mails.forEach(function(mail){
			mail.sendMsg();
			console.log('Mail send success!');
		});
	};
};

const mail1 = new Mail;
const mail2 = new Mail;
const mail3 = new Mail;

const client = new MailClient();

client.addMail(mail1);
client.addMail(mail2);
client.addMail(mail3																																																																																																					);

client.sendSpam();