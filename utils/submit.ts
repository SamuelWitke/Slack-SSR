
//const userNameAPI = (ms: number) => new Promise(resolve => setTimeout(resolve(['john', 'paul', 'george', 'ringo']), ms))

export function signUpValidateAync(values: any) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const errors = {
				_error: "Login Failed"
			} as any;
			if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
				errors.username = 'User Name Taken'
			}
			if (errors.username) {
				reject(errors)
			}
			else {
				resolve();
			}
		}, Math.random() * 1000)
	})
}

export function sigunUpValidate(values: any) {
	const errors = {} as any;
	if (!values.firstName) {
		errors.firstName = "Required"
	}
	if (!values.lastName) {
		errors.lastName = "Required"
	}
	if (!values.username) {
		errors.username = 'Required'
	} else if (values.username.length > 15) {
		errors.username = 'Must be 15 characters or less'
	}
	if (!values.email) {
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	}
	return errors
}
