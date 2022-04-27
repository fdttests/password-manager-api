import PasswordCard from "../models/PasswordCard";
import PasswordCardRepository from "../repositories/PasswordCardRepository";

export default class UpdatePasswordCardUseCase {
    public constructor(
        private passwordCardRepository = new PasswordCardRepository()
    ) { }
    
    public execute(passwordCard: PasswordCard) {
        return this.passwordCardRepository.update(passwordCard);
    }
}