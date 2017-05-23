const ApplicationIndexView = require('../../../../app/scripts/views/application/index');

describe('Application Index view', function () {
  beforeEach(function () {
    this.view = ApplicationHelper.renderView(new ApplicationIndexView());
  });

  afterEach(function() {
    delete this.view;
  });

  it('displays message in heading', function () {
    const resultHeading = this.view.$el.find('h1').first();
    expect(resultHeading).to.exist;
    expect(resultHeading.text()).to.equal('Virtual Hold Technologies');
  });
});
