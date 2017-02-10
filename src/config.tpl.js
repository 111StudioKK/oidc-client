import OIDC from 'oidc-client';

const OidcSettings = {
    automaticSilentRenew:true,
    authority: '',
    client_id: '',
    redirect_uri: '',
    post_logout_redirect_uri: '',
    response_type: '',
    scope: '',
    loadUserInfo: true,
    userStore: new OIDC.WebStorageStateStore({ store: window.localStorage })
};

export const User = new OIDC.UserManager(OidcSettings);