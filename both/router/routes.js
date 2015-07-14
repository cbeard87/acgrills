Router.route('/', {
    name: 'home',
    waitOn: function () {
        return Meteor.subscribe('posts');
    },
    data: {
        posts: Posts.find({}, {sort: {publishDate: 1}, limit: 1})
    }
});

Router.route('/blog', {
    name: 'blog',
    waitOn: function () {
        return Meteor.subscribe('posts');
    },
    data: {
        posts: Posts.find({})
    }
});

Router.route('/blog/:url', {
    name: 'blogSingle',
    data: function() {
        return Posts.findOne(this.params.url);
    }
});

Router.route('/podcast', {
    name: 'podcast'
});

Router.route('/connect', {
    name: 'connect'
});

Router.route('/store', {
    name: 'store'
});

Router.route('/about', {
    name: 'about'
});

Router.route('/new-post', {
    name: 'newPost'
});



Router.plugin('ensureSignedIn', {
   only: ['changePwd', 'newPost']
 });
