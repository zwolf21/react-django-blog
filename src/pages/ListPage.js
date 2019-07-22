<<<<<<< HEAD
import React from "react";

const ListPage = () => {
  return <div>List</div>;
};

export default ListPage;
=======
import React from "react";

import PageTemplate from "../components/common/PageTemplate";
import ListWrapper from "../components/list/ListWrapper";
import ListContainer from "../containers/list/ListContainer";

const ListPage = ({ match }) => {
  const { page = 1, tag } = match.params;
  return (
    <PageTemplate>
      <ListWrapper>
        <ListContainer page={parseInt(page, 10)} tag={tag} />
      </ListWrapper>
    </PageTemplate>
  );
};

export default ListPage;
>>>>>>> e4f5591b0814399f9ade08028915cd1006274920
