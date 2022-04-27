import GetAllPasswordCardFilterModel from "../models/GetAllPasswordCardFilterModel";
import PasswordCardRepository from "../repositories/PasswordCardRepository";

export default class GetAllPasswordCardUseCase {
    public constructor(
        private passwordCardRepository = new PasswordCardRepository()
    ) { }

    public execute(filter: GetAllPasswordCardFilterModel) {
        return this.passwordCardRepository.get(filter);
    }
}
