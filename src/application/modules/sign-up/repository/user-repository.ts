import type { User } from '../entity/user'

export class UserRepository {
	public users: User[] = []

	async create(data: User): Promise<void> {
		this.users.push(data)
		console.log('Objeto salvo na memória', this.users)
	}
}
