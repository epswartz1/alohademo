import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mahola', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mahola');
    assert.ok(route);
  });
});
