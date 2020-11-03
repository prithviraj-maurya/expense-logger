import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private dataService: DataService) { }
}
