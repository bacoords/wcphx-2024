/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";

import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";

const container = document.getElementsByClassName("wp-block-wpdev-wcphx-2024");
const options = {
	slidesPerPage: 1,
	classes: {
		container: "wp-block-wpdev-wcphx-2024",
		slide: "wp-block-media-text",
	},
	Dots: {
		minCount: 2,
	},
	Autoplay: {
		timeout: 5000,
		showProgress: false,
	},
};

new Carousel(container[0], options, { Autoplay });
