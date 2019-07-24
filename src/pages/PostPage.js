import React from "react";

import PageTemplate from "../components/common/PageTemplate";
import AskRemoveModal from "../components/common/Modal/AskRemoveModal";
import Post from "../containers/post/Post";

const PostPage = ({ match }) => {
  return (
    <div>
      <PageTemplate>
        <Post id={match.params.id} />
        <AskRemoveModal />
      </PageTemplate>
    </div>
  );
};

export default PostPage;
