import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';


module('Req Service', function (hooks) {
    setupTest(hooks);

    test('service is okay', function(assert) {
        const service = this.owner.lookup('service:req');
        assert.ok(service);
    });
});