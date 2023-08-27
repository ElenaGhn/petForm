import { Injectable } from '@angular/core';
import { Pet } from './pet-models';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  addPet(newPet: Pet) {
    console.log('Add pet', newPet);
  }
}
