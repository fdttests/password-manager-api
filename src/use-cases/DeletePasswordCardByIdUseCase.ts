import PasswordCardRepository from "../repositories/PasswordCardRepository";

export default class DeletePasswordCardByIdUseCase {
    public constructor(
        private passwordCardRepository = new PasswordCardRepository()
    ) { }

    public execute(id: string) {
        return this.passwordCardRepository.deleteById(id);
    }
}
