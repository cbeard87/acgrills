Posts = new Mongo.Collection('posts');

var postSchema = new SimpleSchema({
   title: {
       type: String,
       label: 'Title'
   },
   url: {
       type: String,
       autoValue: function() {
           var title = this.field('title');
           if (title.isSet && title.operator !== "$unset") {
               return title.value.replace(" ", "-");
           }
       },
       autoform: {
           omit: true
       }
   },
   author: {
       type: String,
       autoValue: function() {
           return "Anthony C. Grills";
       },
       autoform: {
           omit: true
       }
   },
   category: {
       type: String,
       label: 'Category',
       allowedValues: [
           "Church",
           "Current Events",
           "Discipleship",
           "Leadership",
           "Main Street",
           "Ministry",
           "Personal",
           "Random",
           "Relationships"
       ]
   },
    submitted: {
        type: Date,
        label: 'Date',
        autoform: {
            value: new Date()
        }
    },
    content: {
        type: String,
        autoform: {
            type: 'medium',
            mediumOptions: {
                keepLabel: false
            }
        }
    }
});

Posts.attachSchema(postSchema);