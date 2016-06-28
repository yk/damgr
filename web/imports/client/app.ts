import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, NgZone, provide, PlatformRef } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ROUTER_DIRECTIVES, provideRouter, Router } from '@angular/router';
//import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { Home } from './home/home';
import { Account } from './account/account';
import { Nav } from './nav/nav';
import {Constants} from '../constants';

import { ShoppingList } from './shopping-list/shopping-list';
import '../methods.ts';
 
@Component({
      selector: 'app',
        templateUrl: Constants.BASE + 'imports/client/app.html',
        directives: [ROUTER_DIRECTIVES, Nav],
})
class DaMgrApp { }
 
bootstrap(DaMgrApp, [
    provide(APP_BASE_HREF, {useValue: Constants.BASE}),
    provideRouter([
        //{ path: '', component: Home},
        //{ path: 'account', component: Account},
        { path: '', redirectTo: '/shopping-list'},
        { path: 'shopping-list', component: ShoppingList},
    ]),
    disableDeprecatedForms(),
    provideForms()
]);
