import { Divider, Image, Input, Layout, Row } from "antd";
import styled from "styled-components";
import "../index.css";

const { Content } = Layout;

export const draggableDiv = styled.div`
  && {
    font-weight: 600;
    margin-bottom: 0;
    color: rgba(66, 66, 66, 1);
  }
`;



//app.js
export const StyledLayout = styled(Layout)`
  background: #F7F9FD;

`;
export const StyledContent = styled(Content)`
  padding-top: 2rem;
  padding-bottom: 2rem;

  .item-container {
    max-width: 1400px;
    margin: 0 auto;
  }
`;

export const DividerTopApp = styled(Divider)`
  padding: 0px;
  margin: 0px;
  margin-bottom: 6px;
  
`;

export const StyledRowApp = styled(Row)`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-inline: 1.25rem;
  background: #fff;
`;
export const AddInputimg = styled(Image)`
  display: inline-flex;
  margin-right: 1rem;
`;

export const InputApp = styled(Input)`
  display: inline-flex;
  margin-left: 1rem;
  width: 200px;
`;
export const DividerBottomApp = styled(Divider)`
  padding: 0px;
  margin: 0px;
  margin-bottom: 2rem;
  margin-top: 6px;
          
`;

export const StyledDiv = styled.div`
  box-shadow: ${({ isDragging }) =>
    isDragging ? "0 0 5px 2px rgba(0, 0, 0, 0.1)" : "none"};
  ${({ draggableProps }) => draggableProps && draggableProps.style};

`;
