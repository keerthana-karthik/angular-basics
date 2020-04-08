import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsComponent } from "./forms/forms.component";
import { ReactiveFormComponent } from "./forms/reactive-form/reactive-form.component";
import { TemplateDrivenFormComponent } from "./forms/template-driven-form/template-driven-form.component";
import { DemoDetailsComponent } from "./demo-details/demo-details.component";
import { ParentComponent } from "./interaction/parent/parent.component";
import { InteractionComponent } from "./interaction/interaction.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth/auth.guard";
import { NoAuthMessageComponent } from "./auth/no-auth-message/no-auth-message.component";
import { CanFormDeactivateGuard } from "./forms/can-form-deactivate.guard";
import { PageNotFoundComponent } from "./page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "demo",
    component: DemoDetailsComponent,
    children: [
      { path: "no-auth", component: NoAuthMessageComponent },
      {
        path: "forms",
        canActivate: [AuthGuard],
        component: FormsComponent,
        children: [
          {
            path: "template",
            component: TemplateDrivenFormComponent,
            canDeactivate: [CanFormDeactivateGuard]
          },
          { path: "reactive", component: ReactiveFormComponent }
        ]
      },
      {
        path: "interaction",
        component: InteractionComponent,
        children: [{ path: ":direction", component: ParentComponent }]
      }
    ]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
