import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

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

  async getObject(key: string): Promise<{ value: any }> {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }
}
