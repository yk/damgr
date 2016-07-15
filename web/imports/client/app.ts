import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, NgZone, provide, PlatformRef } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ROUTER_DIRECTIVES, provideRouter, Router } from '@angular/router';
//import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';

import { Home } from './home/home';
import { Account } from './account/account';
import {Constants} from '../constants';

import { ShoppingList } from './shopping-list/shopping-list';
import '../methods.ts';

import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {OVERLAY_CONTAINER_TOKEN} from '@angular2-material/core/overlay/overlay';
import {MdLiveAnnouncer} from '@angular2-material/core/a11y/live-announcer';
import {createOverlayContainer} from '@angular2-material/core/overlay/overlay-container';
import {MdGestureConfig} from '@angular2-material/core/gestures/MdGestureConfig';
import {MdIconRegistry} from '@angular2-material/icon/icon-registry';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MdIcon} from '@angular2-material/icon';
 
@Component({
    selector: 'app',
    templateUrl: Constants.BASE + 'imports/client/app.html',
    directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MdToolbar, MdButton, MdIcon],
})
class DaMgrApp {
    public views: Object[] = [
        {
            name: 'Shopping List',
            path: '/shopping-list'
        },
    ];
}
 
bootstrap(DaMgrApp, [
    provide(APP_BASE_HREF, {useValue: Constants.BASE}),
    provideRouter([
        //{ path: '', component: Home},
        //{ path: 'account', component: Account},
        { path: '', redirectTo: '/shopping-list', pathMatch: 'full'},
        { path: 'shopping-list', component: ShoppingList},
    ]),
    disableDeprecatedForms(),
    provideForms(),
    MdLiveAnnouncer,
    {provide: OVERLAY_CONTAINER_TOKEN, useValue: createOverlayContainer()},
    MdIconRegistry,
    {provide: HAMMER_GESTURE_CONFIG, useClass: MdGestureConfig},
    HTTP_PROVIDERS,
]);
