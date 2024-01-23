/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

import Flickity from "flickity";

const container = document.getElementsByClassName("wp-block-wpdev-wcphx-2024");
const options = {};

new Flickity(container[0], options);
