import styled from "styled-components";

import { Button, Image, Modal, Row } from "antd";

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    margin-top: 4rem;
    background-color: #eeeff3;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    border-radius: 0px;
    padding:2rem;
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
  margin-left: 38px;
  color: #87888a;
  font-family: 'SourceSansPro Light', sans-serif;
`;

export const ModalTitle = styled.span`
  margin-left:16px;
  font-family: 'SourceSansPro Light', sans-serif;
  font-weight: 400;
`;

export const ModalRow = styled(Row)`
  background-color: #eeeff3;

`;
export const ModalImg = styled(Image)`
  margin-bottom: 5px;

`;