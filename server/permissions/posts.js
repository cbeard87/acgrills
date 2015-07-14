Posts.allow({
    insert: function(doc, userId) {
        return !! userId;
    },
    update: function(doc, userId) {
        return !! userId;
    }
});