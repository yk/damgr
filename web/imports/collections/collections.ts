import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import * as _u from 'lodash';

export let ShopItems = new Mongo.Collection<ShopItem>('shopitems');

let loggedIn = function(){return !!Meteor.user();}

ShopItems.allow({
    insert: () => true,
    update: () => true,
    remove: () => true,
});
