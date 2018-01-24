import '../../polymer/polymer.js';
import '../iron-control-state.js';
import '../iron-button-state.js';

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Polymer({

  is: 'test-control',

  behaviors: [
    Polymer.IronControlState
  ]

});

Polymer({

  is: 'test-button',

  behaviors: [
    Polymer.IronControlState,
    Polymer.IronButtonState
  ],

  _buttonStateChanged: function() {

  }

});

Polymer({
  _template: Polymer.html`
    <input id="input">
`,

  is: 'nested-focusable',

  behaviors: [
    Polymer.IronControlState
  ]
});

Polymer({
  _template: Polymer.html`
    <slot></slot>
`,

  is: 'test-light-dom',

  behaviors: [
    Polymer.IronControlState,
    Polymer.IronButtonState
  ]
});
