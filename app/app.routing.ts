import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";
import { undergruppeComponent } from "./undergruppe/undergruppe";
import { behandlingComponent } from "./behandlinger/behandlingComponent";


export const routes = [
    { path: "", component: ListComponent },
    { path: "list", component: ListComponent },
    { path: "undergruppe/:id", component: undergruppeComponent },
    { path: "behandlingComponent/:id", component: behandlingComponent }
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent,
    undergruppeComponent,
    behandlingComponent
];