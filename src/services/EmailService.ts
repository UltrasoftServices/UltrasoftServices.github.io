import { singleton } from "tsyringe";

@singleton()
export default class EmailService {
	constructor() { }

	public async sendEmailAsync(): Promise<Error | undefined> {
		return await new Promise(resolve =>
			setTimeout(() => resolve(undefined), 3000)
		);
	}
}