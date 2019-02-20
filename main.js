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
}

function Doctor(prof) {
	this.prof = prof;
};

const vasia = new Pacient();

const herurg = new Doctor('herurg');
const pediatr = new Doctor('pediatr');


vasia.addDoctor(herurg);
vasia.addDoctor(pediatr);
console.log('vasia add', vasia);
vasia.deleteDoctor(pediatr);
console.log('vasia delete', vasia);