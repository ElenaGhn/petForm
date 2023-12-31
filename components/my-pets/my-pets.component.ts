import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/pet-models';
import { PetService } from 'src/app/pet.service';

// Asigurați-vă că ajustați calea către serviciul PetService

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.scss'],
})
export class MyPetsComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petService: PetService) {}

  ngOnInit() {
    console.log('pettttt');
  }
}
