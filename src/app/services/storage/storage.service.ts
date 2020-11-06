import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Expense } from 'src/app/model/expense';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setObject(key: string, value: any) {
    await Storage.set({
      "key": key,
      value: JSON.stringify(value)
    });
  }

  async getObject(key: string): Promise<any> {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }
}
