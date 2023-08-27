import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { MyPetsComponent } from './components/my-pets/my-pets.component';

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
