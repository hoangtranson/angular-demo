import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

export interface LoginForm {
  email: string;
  password: string;
}

type LoginFormControls = { [key in keyof LoginForm]: AbstractControl };
type LoginFormGroup = FormGroup & {
  value: LoginForm;
  controls: LoginFormControls;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public loginForm: LoginFormGroup;

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    } as LoginFormControls) as LoginFormGroup;
  }

  private get emailDomain(): string {
    return this.loginForm.value.email;
  }
}
