import { LocalStorage } from 'node-localstorage';
import PasswordCard from "../models/PasswordCard";
import { v4 as uuidv4 } from 'uuid';
import GetAllPasswordCardFilterModel from '../models/GetAllPasswordCardFilterModel';

export default class PasswordCardRepository {
    private storageKey = 'PasswordCards';

    public constructor(
        private localStorage = new LocalStorage('./storage')
    ) { }

    public async get(filter: GetAllPasswordCardFilterModel = {}): Promise<Array<PasswordCard>> {
        const list = JSON.parse(this.localStorage.getItem(this.storageKey) ?? '[]'); 

        return list.filter((item: PasswordCard) => {
            if (!filter.term) {
                return true;
            }

            return item.name?.includes(filter.term);
        });
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
