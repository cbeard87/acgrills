Meteor.startup(function() {
   if (Meteor.users.find().count() === 0) {
       Accounts.createUser({
           username: 'Anthony',
           email: 'acgrills@gmail.com',
           password: 'floating32'
       });
   }
});