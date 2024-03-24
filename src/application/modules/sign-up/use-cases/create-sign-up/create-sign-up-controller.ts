import { create } from 'infra/shared/http-helper'
import type { IController } from 'infra/shared/protocols/controller'
import type { HttpRequest, HttpResponse } from 'infra/shared/protocols/http'
import type { CreateSignUpUseCase } from './create-sign-up-use-case'

interface ICreateSignUpDTO {
	name: string
	password: string
}

export class CreateSignUpController implements IController {
	constructor(private readonly useCase: CreateSignUpUseCase) {}

	async handle(request: HttpRequest): Promise<HttpResponse> {
		const { name, password } = request.body as ICreateSignUpDTO

		const useCase = await this.useCase.execute({ name, password })

		return create(useCase)
	}
}
