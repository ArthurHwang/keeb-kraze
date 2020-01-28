import React, { ReactElement } from "react";
import MenuItem from "./MenuItem";
import styled from "styled-components";
import { connect } from "react-redux";
import { selectDirectorySections } from "../redux/directory/directorySelectors";
import { createStructuredSelector } from "reselect";

interface Props {
  directory: {
    map: any;
    sections: {
      title: string;
      imageUrl: string;
      id: number;
      linkUrl: string;
    }[];
  };
}

export const _Directory: React.FC<Props> = ({ directory }) => {
  return (
    <StyledDirectory className="directory-menu">
      {directory.map(
        ({ id, ...sectionProps }: any): ReactElement => (
          <MenuItem key={id} {...sectionProps} />
        )
      )}
    </StyledDirectory>
  );
};

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySections
});

export const Directory = connect(mapStateToProps)(_Directory);

const StyledDirectory = styled("div")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
