import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './common/toolbar/toolbar.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { InfoComponent } from './common/info/info.component';
import { TrackingService } from './services/tracking.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FormComponent,
    ResultComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [TrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
