import 'reflect-metadata';
import { Component } from '@angular/core';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import {MeteorComponent} from 'angular2-meteor';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Constants} from '../../constants';
 
@Component({
      selector: 'navigation',
        templateUrl: Constants.BASE + 'imports/client/nav/nav.html',
        directives: [ ROUTER_DIRECTIVES ],
})
@InjectUser("user")
export class Nav extends MeteorComponent{
    user: Meteor.User;
}
