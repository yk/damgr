import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

let loginCheck = () => {
    if(!Meteor.user()){
        throw new Meteor.Error('403', 'Not logged in!');
    }
};

