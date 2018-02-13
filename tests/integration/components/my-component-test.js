import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Component | my component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    this.owner.register('service:session', Service.extend({
      isAuthenticated: true,
      invalidate() {
        assert.ok(true);
      }
    }));
    await render(hbs`{{my-component}}`);

    assert.equal(this.element.textContent.trim(), 'yes');
  });

});
