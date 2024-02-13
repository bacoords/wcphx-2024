import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { BlockControls } from "@wordpress/block-editor";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useDispatch, useSelect } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";

/**
 * Add the attribute to the block.
 * This is the attribute that will be saved to the database.
 *
 * @param {object} settings block settings
 * @param {string} name block name
 * @returns {object} modified settings
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#blocks-registerblocktype
 */
addFilter(
	"blocks.registerBlockType",
	"wpdev/wcphx-2024",
	function (settings, name) {
		if (name !== "core/media-text") {
			return settings;
		}

		return {
			...settings,
			usesContext: ["wpdev/wcphx-2024"],
		};
	},
);

/**
 * Edit component for the block.
 *
 * @param {object} props block props
 * @returns {JSX}
 */
function Edit(props) {
	// Confirm our block is receiving the context.
	if (!props.context["wpdev/wcphx-2024"]) {
		return null;
	}

	// Get the dispatch function from the context.
	const { insertBlock } = useDispatch("core/block-editor");

	// Get the block parent client ID
	const parentBlock = useSelect((select) => {
		let parentBlock = select("core/block-editor").getBlockParentsByBlockName(
			props.clientId,
			"wpdev/wcphx-2024",
		);
		parentBlock = select("core/block-editor").getBlock(parentBlock[0]);
		return parentBlock;
	});

	// Insert a new slide block
	const insertSlide = () => {
		insertBlock(
			createBlock("core/media-text", { imageFill: true }),
			parentBlock.innerBlocks.length,
			parentBlock.clientId,
		);
	};

	return (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton onClick={insertSlide}>
					{__("Add Slide", "wcphx-2024")}
				</ToolbarButton>
			</ToolbarGroup>
		</BlockControls>
	);
}

/**
 * Add the edit component to the block.
 * This is the component that will be rendered in the editor.
 * It will be rendered after the original block edit component.
 *
 * @param {function} BlockEdit Original component
 * @returns {function} Wrapped component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
addFilter(
	"editor.BlockEdit",
	"wpdev/wcphx-2024",
	createHigherOrderComponent((BlockEdit) => {
		return (props) => {
			if (props.name !== "core/media-text") {
				return <BlockEdit {...props} />;
			}

			return (
				<>
					<BlockEdit {...props} />
					<Edit {...props} />
				</>
			);
		};
	}),
);
