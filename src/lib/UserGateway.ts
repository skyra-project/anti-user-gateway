import { Gateway, Settings, GatewayStorage, ProxyMapEntry } from 'klasa';
import { RequestHandler, IdKeyed } from '@klasa/request-handler';
import { Cache } from '@klasa/cache';
import { UserSettings } from './UserSettings';

export class UserGateway extends GatewayStorage implements Gateway {


	public cache = new Cache<string, ProxyMapEntry>();
	public requestHandler = new RequestHandler<string, IdKeyed<string>>(
		id => Promise.resolve({ id }),
		() => Promise.resolve([])
	);


	public acquire(target: IdKeyed<string>, id?: string | undefined): Settings {
		return this.create(target, id);
	}


	public get() {
		return null;
	}


	public create(target: IdKeyed<string>, id?: string | undefined): Settings {
		return new UserSettings(this, target, id ?? target.id);
	}


}
