import { extender } from '@klasa/core';
import { Settings } from 'klasa';

export class PluginUser extends extender.get('User') {

	public set settings(_value: Settings) {
		// noop
	}

}

extender.extend('User', () => PluginUser);
