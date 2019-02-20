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
		});
	};
};

const mail1 = new Mail;
const mail2 = new Mail;
const mail3 = new Mail;

const client = new MailClient();

mail1.addClient(client);
mail2.addClient(client);


client.sendSpam();