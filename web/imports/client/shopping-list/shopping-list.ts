import 'reflect-metadata';
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { ShopItems } from '../../collections/collections';
import { MeteorComponent } from 'angular2-meteor';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators } from '@angular/forms';
import {Constants} from '../../constants';
 
@Component({
    templateUrl: Constants.BASE + 'imports/client/shopping-list/shopping-list.html',
    directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
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
