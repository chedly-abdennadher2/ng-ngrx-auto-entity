import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './state/app.state';
import {HttpClientModule} from '@angular/common/http';
import { Student } from './model/Student';
import { StudentService } from './services/studentservice';
import { StudentFacade } from './facades/student.facade';
import { StudentModule } from './student/student.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StudentModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer, { 
      runtimeChecks: { 
          // Auto-Entity includes classes in its actions:
          strictActionSerializability: false
      }
  }),
    EffectsModule.forRoot([]),
    NgrxAutoEntityModule.forRoot(),
  
  ],
  providers: [{provide : Student, useClass:StudentService},
    StudentFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
