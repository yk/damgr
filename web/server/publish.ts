import {Meteor} from 'meteor/meteor';
import {ShopItems} from '../imports/collections/collections';
import * as _u from 'lodash';

Meteor.publish('userData', function(){
    return Meteor.users.find(this.userId);
});


Meteor.publish('shopitems', function(){
    return ShopItems.find();
});

