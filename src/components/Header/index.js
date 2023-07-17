import { Col, Row } from "antd";
import React from "react";

import Logo from "../../assets/images/logo.png";
import {
  HeaderLogo,
  HeaderRow,
  StyledButton,
  StyledHeader,
  StyledPlusOutlined,
  StyledTitle,
} from "./style";

const HeaderComponent = ({ setIsAddingData }) => {
  return (
    <StyledHeader>
      <HeaderRow align="top" justify="center">
        <Col xs={24} sm={22} md={22} lg={22} xl={22} xxl={22}>
          <Row>
            <Col>
              <HeaderLogo
                src={Logo}
                alt="Logo"
                preview={false}
                width={40}
                height={40}
              />
              <StyledTitle level={4}>MY PROJECT</StyledTitle>
            </Col>
            <StyledButton
              type="primary"
              shape="circle"
              icon={<StyledPlusOutlined />}
              onClick={() => setIsAddingData(true)}
            />
          </Row>
        </Col>
      </HeaderRow>
    </StyledHeader>
  );
};

export default HeaderComponent;
