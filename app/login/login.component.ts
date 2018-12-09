import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
import { SetupToken} from "../shared/setuptoken/setuptoken.service";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { Config } from "../shared/config";

@Component({
    selector: "gr-login",
    providers: [UserService, SetupToken],
    templateUrl: "login/login.component.html",
    styleUrls: ["login/login.component.css"]
})

export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn = true;
    processing = false;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;

    constructor(private router: Router, private userService: UserService, private page: Page, private createToken: SetupToken) {
        this.user = new User();
        this.user.email = "info@jaxweb.dk";
        this.user.password = "2010Thuva";
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.setupToken();
    }

    setupToken() {
        console.log("Setup Token");
        this.createToken.getToken()
            .subscribe(
                () => console.log("Token created" + Config.jwttoken),
                (error) => alert("Kunne ikke kontakte serveren")
            );
    }

    submit() {
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }

        this.processing = true;
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    login() {
        this.userService.login(this.user)
            .subscribe(
                () => {
                    this.processing = false;
                    this.router.navigate(["/list"]);
                },
                //(error) => alert("Unfortunately we could not find your account.")
            );
    }

    signUp() {
        this.userService.register(this.user)
            .subscribe(
                () => {
                    this.processing = false;
                    alert("Your account was successfully created.");
                    this.toggleDisplay();
                },
                () => {
                    this.processing = false;
                    alert("Unfortunately we were unable to create your account.");
                }
            );
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    forgotPassword() {
        prompt({
            title: "Glemt Password",
            message: "Indtast den e-mail-adresse, du brugte til at registrere dig hos Zebrafinken for at nulstille din adgangskode.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then((data) => {
            if (data.result) {
                this.userService.resetPassword(data.text.trim())
                    .subscribe(
                        () => {
                            this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                        },
                        () => {
                            this.alert("Unfortunately, an error occurred resetting your password.");
                        }
                    );
            }
        });
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }
    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }

    alert(message: string) {
        return alert({
            title: "Zebrafinken",
            okButtonText: "OK",
            message: message
        });
    }
}