// This will import a hook that will return all props that need to be added to the top level block
// Examples: wp-block HTML class
import { useBlockProps } from "@wordpress/block-editor";

// Including CSS file. We can use whatever we prefer (editor)
import "./editor.css";

export default function edit() {
    // This will return an object with several classes that style things correctly on the editor
    const blockProps = useBlockProps();
    // console.log(blockProps);

    return <h1 {...blockProps}>Hello World, Step 1 (from the editor)</h1>;
}
