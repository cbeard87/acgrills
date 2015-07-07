if(Meteor.isClient) {
  Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].public.meta.title
        title: 'Main Street United Methodist Church',
        suffix: 'Project Title'
      }
  });
}
