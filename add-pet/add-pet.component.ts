import { Component } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet-models';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss'],
})
export class AddPetComponent {
  showPetForm: boolean = false;

  animal: string = '';
  name: string = '';
  age: number = 0;
  sex: string = '';
  color: string = '';
  sterilized: boolean = false;

  constructor(private petService: PetService) {}

  togglePetForm() {
    this.showPetForm = !this.showPetForm;
  }

  register(pet: Pet): void {
    const newPet: Pet = {
      animal: this.animal,
      name: this.name,
      age: this.age,
      sex: this.sex,
      color: this.color,
      sterilized: this.sterilized,
    };

    this.petService.addPet(newPet);

    this.animal = '';
    this.name = '';
    this.age = 0;
    this.sex = '';
    this.color = '';
    this.sterilized = false;
  }
}
