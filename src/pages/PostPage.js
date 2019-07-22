<<<<<<< HEAD
import React from "react";

const PostPage = () => {
  return <div>Post</div>;
};

export default PostPage;
=======
import React from "react";

import PageTemplate from "../components/common/PageTemplate";
import PostInfo from "../components/post/PostInfo";
import PostBody from "../components/post/PostBody";
import Post from "../containers/post/Post";

const PostPage = ({ match }) => {
  return (
    <div>
      <PageTemplate>
        <Post id={match.params.id} />
      </PageTemplate>
    </div>
  );
};

export default PostPage;
>>>>>>> e4f5591b0814399f9ade08028915cd1006274920
