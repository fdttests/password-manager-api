import PasswordCard from "../models/PasswordCard";
import PasswordCardRepository from "../repositories/PasswordCardRepository";

export default class CreatePasswordCardUseCase {
    public constructor(
        private passwordCardRepository = new PasswordCardRepository()
    ) { }

    public execute(passwordCard: PasswordCard) {
        return this.passwordCardRepository.store(passwordCard);
    }
}
