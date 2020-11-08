import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ActionService } from '../action/action.service';
import { DataService } from '../data/data.service';

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

  async clearStorage(): Promise<void> {
    return await Plugins.Storage.clear();
  }
}
