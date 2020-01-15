import React, { ReactElement } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import styled from "styled-components";

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
  return (
    <StyledMenuItem
      className={`${size && size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        {" "}
      </div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </StyledMenuItem>
  );
};

export default withRouter(MenuItem);

const StyledMenuItem = styled("div")`
  /* .menu-item { */
  min-width: 30%;
  position: relative;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &.large {
    height: 380px;
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    position: absolute;
  }

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;

    .title {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
  /* } */
`;
