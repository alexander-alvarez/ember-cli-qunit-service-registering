import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  session: inject(),

  init(){
    this.get('session').invalidate();
    this._super(...arguments);
  }
});
