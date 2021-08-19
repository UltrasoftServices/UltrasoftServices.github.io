import { singleton } from "tsyringe"

@singleton()
export default class EmailService {
	public async sendEmailAsync(): Promise<Error | undefined> {
		return await new Promise(resolve =>
			setTimeout(() => resolve(undefined), 1000)
		)
	}
}