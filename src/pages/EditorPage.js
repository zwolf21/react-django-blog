<<<<<<< HEAD
import React from "react";

const EditorPage = () => {
  return <div>Editor</div>;
};

export default EditorPage;
=======
import React from "react";

import EditorTemplate from "../components/editor/EditorTemplate";
import EditorHeaderContainer from "../containers/editor/EditorHeaderContainer";
import EditorPaneContainer from "../containers/editor/EditorPaneContainer";
import PreviewPaneContainer from "../containers/editor/PreviewPaneContainer";

const EditorPage = () => {
  return (
    <div>
      <EditorTemplate
        header={<EditorHeaderContainer />}
        editor={<EditorPaneContainer />}
        preview={<PreviewPaneContainer />}
      />
    </div>
  );
};

export default EditorPage;
>>>>>>> e4f5591b0814399f9ade08028915cd1006274920
