import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlPrivacy
 * @class
 * @classdesc Privacy pagina
 *
 * @extends HTMLElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-privacy/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-privacy/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-privacy.html|Demo}
 *
 */
export class VlPrivacy extends vlElement(HTMLElement) {}

define('vl-privacy', VlPrivacy);
