import { Client, Plugin } from '@klasa/core';
import { KlasaClient, Gateway } from 'klasa';

export class PluginClient extends KlasaClient implements Plugin {

	public [Client.plugin](this: KlasaClient) {
		this.gateways.register(new Gateway(this, 'users'));
	}

}
