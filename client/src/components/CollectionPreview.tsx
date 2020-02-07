import React, { ReactElement } from "react";
import styled from "styled-components";
import { CollectionItem } from "./CollectionItem";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

interface Props {
  title: string;
  items: itemParams[];
}

interface itemParams {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export const CollectionPreview: React.FC<Props> = ({
  title,
  items
}): ReactElement => (
  <StyledCollectionPreview className="collection-preview">
    <Link className="title" to={`shop/${title.toLowerCase()}`}>
      <h1>{title.toUpperCase()}</h1>{" "}
      <IoMdArrowDropright
        fontSize="30px"
        style={{ position: "relative", top: "3px" }}
      />
    </Link>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </StyledCollectionPreview>
);

const StyledCollectionPreview = styled("div")`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  h1 {
    margin: 0;
    padding: 10px 0;
    display: inline-block;
  }

  .title {
    background: ${({ theme }) => theme.black};
    font-size: 18px;
    color: ${({ theme }) => theme.grey};
    text-align: center;
    margin: 0;
    opacity: 1;

    &:hover {
      opacity: 0.7;
    }
  }

  .preview {
    display: flex;
    justify-content: space-between;

    @media (max-width: 872px) {
      display: block;
    }
  }
`;
