import { Component, OnInit } from "@angular/core";
import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
import { SetupToken} from "../shared/setuptoken/setuptoken.service";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { Token } from "../shared/setuptoken/setuptoken.model";

@Component({
    selector: "gr-login",
    providers: [UserService, SetupToken],
    templateUrl: "login/login.component.html",
    styleUrls: ["login/login.component.css"]
})

export class LoginComponent implements OnInit {
    user: User;
    token: Token;
    isLoggingIn = true;

    constructor(private router: Router, private userService: UserService, private page: Page, private createToken: SetupToken) {
        this.user = new User();
        this.user.email = "info@jaxweb.dk";
        this.user.password = "2010Thuva";
//        this.setupToken;
        this.token = new Token();
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.setupToken();
    }

    setupToken() {
        console.log("Setup Token");
        this.createToken.getToken()
            .subscribe(
                () => console.log("Token created"),
                (error) => alert("Kunne ikke kontakte serveren")
            );
    }

    submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    login() {
        this.userService.login(this.user)
            .subscribe(
                () => this.router.navigate(["/list"]),
                (error) => alert("Unfortunately we could not find your account.")
            );
    }

    signUp() {
        this.userService.register(this.user)
            .subscribe(
                () => {
                    alert("Your account was successfully created.");
                    this.toggleDisplay();
                },
                () => alert("Unfortunately we were unable to create your account.")
            );
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
}