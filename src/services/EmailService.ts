import firebase from 'firebase/app'
import 'firebase/functions'
import { singleton } from "tsyringe"

@singleton()
export default class EmailService {
	public async sendEmailAsync(from: string, name: string, inquiry: string): Promise<Error | undefined> {
		const callable = firebase.functions().httpsCallable("sendInquiry")
		const res = await callable({ from: from, name: name, inquiry: inquiry })
		const err = res.data.resErr

		return err ? new Error(err) : undefined;
	}
}