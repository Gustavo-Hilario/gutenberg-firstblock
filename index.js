const registerBlockType = wp.blocks.registerBlockType;

// Using React from the wp.element package
const wpreact = wp.element;

registerBlockType("blocks/firstblock", {
    title: "First block",
    description: "This is the first block",
    category: "text",
    icon: "format-status",

    edit: function () {
        return wpreact.createElement(
            "h1",
            { className: "first-block" },
            "Hello World, Step 1 (from the editor)."
        );
    },
    save: function () {
        return wpreact.createElement(
            "h1",
            null,
            "Hello World, Step 1 (from the frontend)."
        );
    },
});
