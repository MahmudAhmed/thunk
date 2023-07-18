import { Divider, Input, Row } from "antd";
import styled from "styled-components";

//dataitem

export const StyledRowDataItem = styled(Row)`
  padding: 0px;
  margin: 0px;
  margin-bottom: 0px;
`;

export const DividerTopDataItem = styled(Divider)`
  padding: 0px;
  margin: 0px;
  margin-top: 0px;
`;

export const StyledInnerRowDataItem = styled.div`
  background-color: white;
  border: ${(props) => (props.isDeleteHovered ? "0.5px solid black" : "0px")};
  display: flex;
  justify-content: space-between;
  align-items: middle;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-inline: 1.25rem;
`;

export const DividerBottomDataItem = styled(Divider)`
  padding: 0px;
  margin: 0px;
  margin-bottom: 0px;
`;

export const EditInput = styled(Input)`
  margin-left: 1rem;
  width: 75%;
`;
export const ProjectName = styled.p`
  font-family: 'SourceSansPro Regular', sans-serif;
  font-weight: 400;
  margin-inline: 1rem;
  text-overflow: ellipsis;
  max-width: 100px;
  overflow: hidden;
  white-space: nowrap;
`;
export const ProjectCreate = styled.p`
  font-family: 'SourceSansPro Light', sans-serif;
  padding-inline: 1rem;
  color: rgba(0, 0, 0, 0.5);
`;
