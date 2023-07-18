import { Col, Image, Row } from "antd";
import React, { useState } from "react";
import Logo from "../../assets/images/cardicon.png";
import {
  DividerBottomDataItem,
  DividerTopDataItem,
  EditInput,
  ProjectCreate,
  ProjectName,
  StyledInnerRowDataItem,
  StyledRowDataItem,
} from "./style";

import beforeHoverImageDelete from "../../assets/images/DeleteIcon.svg";
import afterHoverImageDelete from "../../assets/images/DeleteIcon_Hover.svg";
import beforeHoverImage from "../../assets/images/EditIcon.svg";
import afterHoverImage from "../../assets/images/EditIcon_Hover.svg";

const CardItem = ({
  item,
  newData,
  editIndex,
  setNewData,
  handleAddData,
  handleEditData,
  handleDeleteDataConfirmation,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDeleteMouseEnter = () => {
    setIsDeleteHovered(true);
  };

  const handleDeleteMouseLeave = () => {
    setIsDeleteHovered(false);
  };

  const handleEditIconClick = () => {
    handleEditData(index);
  };

  const handleDeleteIconClick = () => {
    handleDeleteDataConfirmation(index);
  };

  return (
    <StyledRowDataItem justify="center" align="middle" className="card">
      <Col xs={24}>
        <DividerTopDataItem />
        <StyledInnerRowDataItem
          isDeleteHovered={isDeleteHovered}
          justify="center"
          align="middle"
        >
          <Col  xs={24} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Row align="middle">
              <Col xs={14} md={12} >
                <Row align="middle">
                  <Col span={12} id="thisOne">
                    <Row align="middle">
                      <Col xs={20} xxl={14}>
                        <Row align="middle">
                          <Image
                            src={Logo}
                            preview={false}
                            width={32}
                            height={32}
                            style={{ marginRight: "1rem" }}
                          />
                          {editIndex === index ? (
                            <EditInput
                              value={newData}
                              onChange={(e) => setNewData(e.target.value)}
                              onPressEnter={handleAddData}
                              autoFocus
                            />
                          ) : (
                            <ProjectName>{item.value}</ProjectName>
                          )}
                        </Row>
                      </Col>
                      <Col xs={4} xxl={10}>
                        <Row align="middle" justify="center">
                          {editIndex === index ? (
                            <></>
                          ) : (
                            <>
                              {isHovered ? (
                                <Image
                                  src={afterHoverImage}
                                  alt="After Hover"
                                  style={{ marginRight: "5px", cursor: "pointer" }}
                                  onClick={handleEditIconClick}
                                  preview={false}
                                />
                              ) : (
                                <Image
                                  src={beforeHoverImage}
                                  alt="Before Hover"
                                  style={{ marginRight: "5px", cursor: "pointer" }}
                                  onClick={handleEditIconClick}
                                  preview={false}
                                />
                              )}
                            </>
                          )}
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs={10} md={12}>
                <Row>
                  <Col span={24}>
                    <Row>
                      <Col xs={20} lg={12}>
                        <Row justify="center">
                          <ProjectCreate>{item.createdDate}</ProjectCreate>
                        </Row>
                      </Col>
                      <Col xs={4} lg={12}>
                        <Row
                          justify="end"
                          align="middle"
                          style={{ paddingTop: "0.5rem" }}
                        >
                          <Col
                            onMouseEnter={handleDeleteMouseEnter}
                            onMouseLeave={handleDeleteMouseLeave}
                          >
                            {isDeleteHovered ? (
                              <Image
                                src={afterHoverImageDelete}
                                alt="After Hover Delete"
                                style={{ cursor: "pointer" }}
                                onClick={handleDeleteIconClick}
                                preview={false}
                              />
                            ) : (
                              <Image
                                src={beforeHoverImageDelete}
                                alt="Before Hover Delete"
                                style={{ cursor: "pointer" }}
                                onClick={handleDeleteIconClick}
                                preview={false}
                              />
                            )}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </StyledInnerRowDataItem>
        <DividerBottomDataItem />
      </Col>
    </StyledRowDataItem>
  );
};

export default CardItem;
