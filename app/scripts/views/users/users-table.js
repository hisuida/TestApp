
const UserRowView = require('./user-row');

module.exports = Backbone.Marionette.CollectionView.extend({
  tagName: 'tbody',
  childView: UserRowView
});
