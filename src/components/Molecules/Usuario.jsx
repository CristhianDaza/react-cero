import React from 'react';

const Usuario = ({name, username, email}) => (
  <article className="card">
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{name}</h3>
      <div className="s-main-center">
        <p>{username}</p>
      </div>
      <div className="s-main-center">
        <a href="/" className="button--ghost-alert button-tiny">
          {email}
        </a>
      </div>
    </div>
  </article>
)

export default Usuario