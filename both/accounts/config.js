AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout', path: '/login'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('changePwd', {layoutTemplate: 'appLayout'});

AccountsTemplates.configure({
    forbidClientAccountCreation: true,
    enablePasswordChange: true
});
