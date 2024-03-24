import { UserRepository } from '../../repository/user-repository'
import { CreateSignUpController } from './create-sign-up-controller'
import { CreateSignUpUseCase } from './create-sign-up-use-case'

export function createSignUpFactory(): CreateSignUpController {
	const repository = new UserRepository()
	const useCase = new CreateSignUpUseCase(repository)
	const controller = new CreateSignUpController(useCase)

	return controller
}
