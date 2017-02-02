/**
 * Panel.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/**
 * Creates a new panel.
 *
 * @-x-less Panel.less
 * @class tinymce.ui.Panel
 * @extends tinymce.core.ui.Container
 * @mixes tinymce.ui.Scrollable
 */
define("tinymce.core.ui.Panel", [
	"tinymce.core.ui.Container",
	"tinymce.core.ui.Scrollable"
], function(Container, Scrollable) {
	"use strict";

	return Container.extend({
		Defaults: {
			layout: 'fit',
			containerCls: 'panel'
		},

		Mixins: [Scrollable],

		/**
		 * Renders the control as a HTML string.
		 *
		 * @method renderHtml
		 * @return {String} HTML representing the control.
		 */
		renderHtml: function() {
			var self = this, layout = self._layout, innerHtml = self.settings.html;

			self.preRender();
			layout.preRender(self);

			if (typeof innerHtml == "undefined") {
				innerHtml = (
					'<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' +
						layout.renderHtml(self) +
					'</div>'
				);
			} else {
				if (typeof innerHtml == 'function') {
					innerHtml = innerHtml.call(self);
				}

				self._hasBody = false;
			}

			return (
				'<div id="' + self._id + '" class="' + self.classes + '" hidefocus="1" tabindex="-1" role="group">' +
					(self._preBodyHtml || '') +
					innerHtml +
				'</div>'
			);
		}
	});
});
