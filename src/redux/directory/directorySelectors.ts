import { createSelector } from "reselect";
import { RootStateOrAny } from "react-redux";

const selectDirectory = (state: RootStateOrAny) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory: any) => directory.sections
);
