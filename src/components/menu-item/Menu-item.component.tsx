import React, { ReactElement } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './Menu-item.styles.scss';

interface Props extends RouteComponentProps<any> {
  title: string;
  linkUrl: string;
  imageUrl: string;
  size?: string;
}

const MenuItem: React.FC<Props> = ({
  title,
  linkUrl,
  imageUrl,
  size,
  history,
  match
}): ReactElement => {
  console.log(history);
  console.log(match);
  console.log(linkUrl);
  return (
    <div
      className={`${size && size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        {' '}
      </div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
