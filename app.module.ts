import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PetService } from './pet.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { MyPetsComponent } from './components/my-pets/my-pets.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    MyPetsComponent,
    AddPetComponent,
    NavigationComponent,
  ],
  providers: [PetService],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
})
export class AppModule {}
