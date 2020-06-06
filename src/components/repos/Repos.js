import React from "react";
import Repoitem from "./Repoitem";

export const Repos = ({ repos }) => {
  return repos.map((repo) => <Repoitem repo={repo} key={repo.id} />);
};

export default Repos;
