import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('g-map', 'Integration | Component | g map', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{g-map}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#g-map}}
      template block text
    {{/g-map}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it contains list of child markers', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#g-map}}
      {{g-map-marker}}
      {{g-map-marker}}
      {{g-map-marker}}
      {{g-map-marker}}
    {{/g-map}}
  `);

  assert.equal(this.get('markers.length', 4));
});
