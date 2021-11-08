import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule, FormsModule],
  exports: [SignInComponent],
  providers: [AuthService],
})
export class SignInModule {}
