const Mail = function () {
	this.addClient = (obj) => {
		obj.addMail(this);
	};
	this._count = 0;
	this.sendMsg = () => {
		console.log('Msg sent', this._count += 1);
	};
};
const Client = function () {
	this.addMail = (mail) => {
		this.mails.push(mail);
	};
	this.mails = [];
	this.sendSpam = () => {
		this.mails.forEach(function(mail){
			mail.sendMsg();
		});
		console.log('sendMsg', this.mails);
	};
};

const mail1 = new Mail;
const mail2 = new Mail;
const mail3 = new Mail;

const client = new Client();

mail1.addClient(client);
mail2.addClient(client);


client.sendSpam();