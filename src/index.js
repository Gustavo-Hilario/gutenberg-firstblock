// This will import the registerBlockType function from the @wordpress/blocks package,
import { registerBlockType } from "@wordpress/blocks";

// Registering a block
registerBlockType("blocks/firstblock", {
    title: "First block",
    description: "This is the first block",
    category: "text",
    icon: "format-status",

    // The edit and save functions are now using JSX
    edit: function () {
        return (
            <h1 className="first-block">
                Hello World, Step 1 (from the editor)
            </h1>
        );
    },
    save: function () {
        return (
            <h1 className="first-block">
                Hello World, Step 1 (from the front end)
            </h1>
        );
    },
});

// We need to compile the code to JavaScript using the following command:
// npx wp-scripts build

// To run, use the following command:
// npx wp-scripts start
