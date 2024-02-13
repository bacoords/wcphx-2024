/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

import Flickity from "flickity";

const containers = document.getElementsByClassName("wp-block-wpdev-wcphx-2024");

if (containers.length > 0) {
	for (let i = 0; i < containers.length; i++) {
		new Flickity(containers[i]);
	}
}
