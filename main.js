function Pacient() {
	this._doctors = [];
	this.addDoctor = (doctor) => {
		this._doctors.push(doctor);
	};
	this.deleteDoctor = (doctor) => {
		this._doctors = this._doctors.filter((item) => {
			return item.prof != doctor.prof;
		});
	};
	this.giveMany = (sum) => {
		this._doctors.forEach((doctor) => {
			doctor.takeManyPacient(sum);
		});
	}
}

function Doctor(prof) {
	this.prof = prof;
	this.many = 0;
	this.takeManyPacient = (sum) => {
		this.many += sum;
	};
};

const vasia = new Pacient();

const herurg = new Doctor('herurg');
const pediatr = new Doctor('pediatr');
const terapeft = new Doctor('terapeft');
const psyhiatr = new Doctor('psyhiatr');

vasia.addDoctor(herurg);
vasia.addDoctor(pediatr);
vasia.addDoctor(terapeft);
vasia.addDoctor(psyhiatr);
console.log('vasia add', vasia);
vasia.deleteDoctor(pediatr);
vasia.giveMany(99);
console.log('vasia delete', vasia);