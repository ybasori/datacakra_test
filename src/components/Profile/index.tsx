import React from "react";

interface ProfilProps {
  name: string;
  picture: string;
  email?: string;
  location?: string;
}

const Profile: React.FC<ProfilProps> = ({ name, email, picture, location }) => {
  const onLoop = (value: number) => {
    let data: number[] = [];
    for (let i = 0; i < value; i++) {
      data = [...data, i];
    }

    return data;
  };
  return (
    <>
      <div className="section has-background-primary has-text-light">
        <div className="container">
          <div className="columns is-justify-content-center">
            <div className="column is-one-third">
              <figure className="image is-128x128 ml-auto mr-auto">
                <img className="is-rounded" src={picture} alt="user profile" />
              </figure>
              <p className="has-text-centered is-size-3">{name}</p>{" "}
              {email && <p className="has-text-centered">{email}</p>}{" "}
              {location && <p className="has-text-centered">{location}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="columns is-justify-content-center">
            <div className="column is-one-third">
              {onLoop(5).map((_, index) => (
                <div className="box" key={`onloop-${index}`}>
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src={picture} alt="user" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>{name}</strong> <small>31m</small>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean efficitur sit amet massa fringilla
                          egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <nav className="level is-mobile">
                        <div className="level-left">
                          <a className="level-item" aria-label="reply" href="/">
                            <span className="icon is-small">
                              <i
                                className="fas fa-reply"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </a>
                          <a
                            className="level-item"
                            aria-label="retweet"
                            href="/"
                          >
                            <span className="icon is-small">
                              <i
                                className="fas fa-retweet"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </a>
                          <a className="level-item" aria-label="like" href="/">
                            <span className="icon is-small">
                              <i
                                className="fas fa-heart"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
