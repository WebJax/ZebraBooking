import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";
import { undergruppe } from "./undergruppe/undergruppe";


export const routes = [
    { path: "", component: ListComponent },
    { path: "list", component: ListComponent },
    { path: "undergruppe", component: undergruppe}
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent,
    undergruppe
];