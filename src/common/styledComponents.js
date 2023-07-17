import { Button, Divider, Image, Input, Layout, Modal, Row } from "antd";
import styled from "styled-components";
import "../index.css";

const { Content } = Layout;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    margin-top: 4rem;
    background-color: #eeeff3;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    border-radius: 0px;
    padding:2rem;
  }
`;

export const draggableDiv = styled.div`
  && {
    font-weight: 600;
    margin-bottom: 0;
    color: rgba(66, 66, 66, 1);
  }
`;

//delete modal
export const ModalButtonYes = styled(Button)`
  background-color: rgba(24, 144, 255, 1);
  padding-inline: 1.25rem;
  color: white;
  &:hover {
        color: white !important;
      }
`;

export const ModalButtonNo = styled(Button)`
  background-color: transparent;
  padding-inline: 1.25rem;
  &:hover {
    border:1px solid #d9d9d9;
  }

`;

export const ModalDesc = styled.p`
  margin-left:26px;
  color: #87888a;
  font-family: 'SourceSansPro Light', sans-serif;
`;

export const ModalTitle = styled.span`
  margin-left:10px;
  font-family: 'SourceSansPro Light', sans-serif;
`;

export const ModalRow = styled(Row)`
  background-color: #eeeff3;

`;
export const ModalImg = styled(Image)`
  margin-bottom: 5px;

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
