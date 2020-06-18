import { Settings } from 'klasa';

export class UserSettings extends Settings {

	public sync() {
		return Promise.resolve(this);
	}


	public destroy() {
		return Promise.resolve(this);
	}

}
