import { GoogleOauthProvider } from './google/google-oauth.provider';
import { FacebookOauthProvider } from './facebook/facebook-oauth.provider';
import { OAuthService } from './oauth.service';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { OAuthProvidersListPage } from './list/oauth-providers.list.page';

@NgModule({
  declarations: [
    OAuthProvidersListPage,
  ],
  imports: [
    IonicModule,
  ],
  entryComponents: [
		OAuthProvidersListPage,
	],
  providers: [
    OAuthService,
    FacebookOauthProvider,
    GoogleOauthProvider
	]
})
export class OAuthModule {}
