import React, { Fragment, useEffect } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";

const User = ({ user, loading, getRepos, getUser, repos, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    //es-lint disable link
  }, []);

  const {
    name,
    login,
    avatar_url,
    followers,
    following,
    public_repos,
    html_url,
    location,
    bio,
    company,
    public_gists,
    blog,
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='btn btn-light '>
        Back To Search
      </Link>

      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h4>Bio</h4>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <h5>Username: {login}</h5>
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <h4>Company: {company}</h4>
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: {blog}</strong>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='badge badge-primary'>Followers: {followers}</div>
      <div className='badge badge-success'>Following: {following}</div>
      <div className='badge badge-light'>Public Repos: {public_repos}</div>
      <div className='badge badge-dark'>Public Gists: {public_gists}</div>

      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
