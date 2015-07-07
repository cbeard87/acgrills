Meteor.startup(function() {
  AutoForm.setDefaultTemplate('semanticUI');

  $('body').on('click', '[data-action=logout]', function(event) {
    event.preventDefault();
    AccountsTemplates.logout();
  });
});

Template.appLayout.rendered = function() {
	$('.right.sidebar')
		.sidebar('attach events', '.content.icon', 'toggle');

}
