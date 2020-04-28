import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./header/header.component";
import { TemplateDrivenFormComponent } from "./forms/template-driven-form/template-driven-form.component";
import { DemoDetailsComponent } from "./demo-details/demo-details.component";
import { FormsComponent } from "./forms/forms.component";
import { ReactiveFormComponent } from "./forms/reactive-form/reactive-form.component";
import { ParentComponent } from "./interaction/parent/parent.component";
import { ChildComponent } from "./interaction/child/child.component";
import { InteractionComponent } from "./interaction/interaction.component";
import { HomeComponent } from "./home/home.component";
import { TemplateFormMoreComponent } from "./demo-details/key-snippets/template-form-more/template-form-more.component";
import { ReactiveFormMoreComponent } from "./demo-details/key-snippets/reactive-form-more/reactive-form-more.component";
import { ComponentInteractionMoreComponent } from "./demo-details/key-snippets/component-interaction-more/component-interaction-more.component";
import { ServicesMoreComponent } from "./demo-details/key-snippets/services-more/services-more.component";
import { NoAuthMessageComponent } from "./auth/no-auth-message/no-auth-message.component";
import { NoauthMessageMoreComponent } from "./demo-details/key-snippets/noauth-message-more/noauth-message-more.component";
import { DemoService } from "./demo.service";
import { WindowRef } from './window.ref.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemplateDrivenFormComponent,
    DemoDetailsComponent,
    FormsComponent,
    ReactiveFormComponent,
    ParentComponent,
    ChildComponent,
    InteractionComponent,
    HomeComponent,
    TemplateFormMoreComponent,
    ReactiveFormMoreComponent,
    ComponentInteractionMoreComponent,
    ServicesMoreComponent,
    NoAuthMessageComponent,
    NoauthMessageMoreComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule {}
