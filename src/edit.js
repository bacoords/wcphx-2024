/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	useInnerBlocksProps,
	BlockControls,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["core/media-text"],
		template: [["core/media-text", { imageFill: true }]],
		defaultBlock: {
			name: "core/media-text",
			attributes: { imageFill: true },
		},
		directInsert: true,
	});

	// Get the dispatch function from the context.
	const { insertBlock } = useDispatch("core/block-editor");

	const insertSlide = () => {
		insertBlock(
			createBlock("core/media-text", { imageFill: true }),
			null,
			props.clientId,
		);
	};
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton onClick={insertSlide}>
						{__("Add Slide", "wcphx-2024")}
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<div {...innerBlocksProps}></div>
		</>
	);
}
