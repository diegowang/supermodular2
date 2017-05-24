import {OAuthProvider, IOAuthOptions } from "ng2-cordova-oauth/provider"

export interface ICASOptions extends IOAuthOptions {
}

export class CAS extends OAuthProvider {
    options: ICASOptions;
    protected authority: string = "https://localhost"
    protected scope = ' ';
    protected defaults: object = {
        response_type: "id_token token",
    }
}