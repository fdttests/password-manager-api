import { LocalStorage } from 'node-localstorage';
import PasswordCard from "../models/PasswordCard";
import { v4 as uuidv4 } from 'uuid';

export default class PasswordCardRepository {
    private storageKey = 'PasswordCards';

    public constructor(
        private localStorage = new LocalStorage('./storage')
    ) { }

    public async get(): Promise<Array<PasswordCard>> {
        return JSON.parse(this.localStorage.getItem(this.storageKey) ?? '[]');
    }

    public async store(passwordCard: PasswordCard): Promise<void> {
        const list = await this.get();

        passwordCard.id = uuidv4();
        list.push(passwordCard);

        this.localStorage.setItem(this.storageKey, JSON.stringify(list));
    }

    public async update(passwordCard: PasswordCard): Promise<void> {
        const list = await this.get();

        const index = list.findIndex((item: PasswordCard) => item.id === passwordCard.id);
        list[index] = passwordCard;

        this.localStorage.setItem(this.storageKey, JSON.stringify(list));
    }

    public async deleteById(id: string): Promise<void> {
        const list = await this.get();
        const updatedList = list.filter(item => item.id !== id);

        this.localStorage.setItem(this.storageKey, JSON.stringify(updatedList));
    }
};
