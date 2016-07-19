import 'reflect-metadata';
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { ShopItems } from '../../collections/collections';
import { MeteorComponent } from 'angular2-meteor';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators } from '@angular/forms';
import {Constants} from '../../constants';
import {MdButton} from '@angular2-material/button';
import {MdIcon} from '@angular2-material/icon';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';

import template from './shopping-list.html';
 
@Component({
    template,
    directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, MdButton, MdIcon, MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MdInput],
})
export class ShoppingList extends MeteorComponent {
    shopItems: Mongo.Cursor<ShopItem>;
    newShopItemName: string = "";

    constructor(){
        super();
        this.subscribe('shopitems', () => {
            this.shopItems = ShopItems.find();
        }, true);
    }

    addShopItem(){
        if(!!this.newShopItemName){
            ShopItems.insert({name: this.newShopItemName});
            this.newShopItemName = '';
        }
    }

    modifyShopItem(item){
        ShopItems.update(item._id, {$set: {name: item.name}});
    }

    removeShopItem(item){
        ShopItems.remove(item._id);
    }

}
