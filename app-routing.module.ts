import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { MyPetsComponent } from './my-pets/my-pets.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'add-pet', component: AddPetComponent },
  { path: 'my-pets', component: MyPetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
