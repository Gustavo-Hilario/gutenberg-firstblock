// This will import a hook that will return all props that need to be added to the top level block
// Examples: wp-block HTML class
import { useBlockProps } from "@wordpress/block-editor";

// Including CSS file. It is important to call this style.css (front-end)
import "./style.css";

export default function save() {
    // Getting the save object with less classes to be run in the frontend
    const blockProps = useBlockProps.save();

    return <h1 {...blockProps}>Hello World, Step 1 (from the front end)</h1>;
}
