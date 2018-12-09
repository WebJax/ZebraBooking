import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";
import { undergruppeComponent } from "./undergruppe/undergruppe";


export const routes = [
    { path: "", component: ListComponent },
    { path: "list", component: ListComponent },
    { path: "undergruppe", component: undergruppeComponent}
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent,
    undergruppeComponent
];