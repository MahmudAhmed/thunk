import { Col, Image } from "antd";
import React from "react";
import MyIcon from "../../assets/images/Question.svg";
import {
  ModalButtonNo,
  ModalButtonYes,
  ModalDesc,
  ModalImg,
  ModalRow,
  ModalTitle,
  StyledModal,
} from "./style";

const DeleteModal = ({
  visible,
  handleConfirmDelete,
  handleCancelDelete,
}) => {
  const modalTitleText = "Are you sure you want to delete this project?";
  const modalCancelText = "No";
  const modalOkText = "Yes";
  const modalDescText = "This action can't be undone";

  return (
    <StyledModal
      closable={false}
      title={
        <ModalRow align="middle" justify="start">
          <Col>
            <ModalImg
              src={MyIcon}
              alt="Image"
              width={22}
              height={22}
              preview={false}
            />
            <ModalTitle>{modalTitleText}</ModalTitle>
          </Col>
        </ModalRow>
      }
      visible={visible}
      onCancel={handleCancelDelete}
      onOk={handleConfirmDelete}
      icon={<Image src={MyIcon} alt="Delete Icon" />}
      cancelText={modalCancelText}
      okText={modalOkText}
      footer={[
        <ModalButtonNo key="cancel" onClick={handleCancelDelete}>
          {modalCancelText}
        </ModalButtonNo>,
        <ModalButtonYes key="ok" onClick={handleConfirmDelete}>
          {modalOkText}
        </ModalButtonYes>,
      ]}
    >
      <ModalDesc>{modalDescText}</ModalDesc>
    </StyledModal>
  );
};

export default DeleteModal;
