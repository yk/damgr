import {ShopItems} from '../imports/collections/collections';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import './publish.ts';
import '../imports/methods.ts';

declare var LDAP_DEFAULTS: Object;

LDAP_DEFAULTS.url = 'ldaps://ldaps-rz-1.ethz.ch/';
LDAP_DEFAULTS.port = 636;
//LDAP_DEFAULTS.dn = 'cn=inf_dalab_proxy,ou=admins,ou=nethz,ou=id,ou=auth,o=ethz,c=ch';
LDAP_DEFAULTS.ldapsCertificate = Assets.getText('ssl/qvroot2.pem');

Meteor.startup(() => {
    ShopItems.find().count();

    Accounts.config({
        forbidClientAccountCreation: true
    });
});


Accounts.registerLoginHandler(function(loginRequest){ 
    //console.log(this.connection);
    //console.log(loginRequest);
    if(!loginRequest.apacheUser){
        return undefined;
    }
    let userId = null;
    let user = Meteor.users.findOne(loginRequest.apacheUser);
    if(!user){
        userId = Meteor.users.insert({_id: loginRequest.apacheUser, 
                                     username: loginRequest.apacheUser});
    }else{
        userId = user._id;
    }
    return {userId: userId};
});
