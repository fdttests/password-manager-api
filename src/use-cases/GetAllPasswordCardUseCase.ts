import PasswordCardRepository from "../repositories/PasswordCardRepository";

export default class GetAllPasswordCardUseCase {
    public constructor(
        private passwordCardRepository = new PasswordCardRepository()
    ) { }
    
    public execute() {
        return this.passwordCardRepository.get();
    }
}