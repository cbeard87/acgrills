Meteor.startup(function() {
  AutoForm.setDefaultTemplate('semanticUI');

  $('body').on('click', '[data-action=logout]', function(event) {
    event.preventDefault();
    AccountsTemplates.logout();
  });

    ShareIt.configure({
        classes: "ui big button"
    });
});

Template.appLayout.rendered = function() {
	$('.right.sidebar')
		.sidebar('attach events', '.content.icon', 'toggle');
    $('.left.sidebar')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('attach events', '.code.icon', 'toggle');
};

Template.appLayout.events({
    'click .sidebar>.item': function() {
        $('.right.sidebar').sidebar('hide');
    }
});
