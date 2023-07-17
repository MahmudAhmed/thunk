import { PlusOutlined } from "@ant-design/icons";
import { Button, Image, Layout, Row, Typography } from "antd";
import styled from "styled-components";
import "../../index.css";

const { Header } = Layout;
const { Title } = Typography;

export const StyledTitle = styled(Title)`
  && {
    font-weight: 600;
    margin-bottom: 0;
    color: rgba(66, 66, 66, 1);
    font-size: 16px;
    font-family: 'Source Sans Pro Regular', sans-serif;
  }
`;

export const StyledHeader = styled(Header)`
  background-color: white;
  box-shadow:0 2px 4px rgba(151, 151, 151, 1) ;
  height: 124px;
  margin-bottom: 2rem;
  font-family: 'Source Sans Pro Light', sans-serif;
`;

export const HeaderRow = styled(Row)`
  position: relative;
  height: 100%;
`;
export const HeaderLogo = styled(Image)`
  margin-right: 10px;
`;

export const StyledButton = styled(Button)`
  && {
    position: absolute;
    right: -15px;
    bottom: 0;
    margin-bottom: -30px;
    background-color: #4a475f;
    height: 60px;
    width: 60px;
    &:hover {
      background-color: #3d3a4f !important;
    }
  }
`;

export const StyledPlusOutlined = styled(PlusOutlined)`
  font-size: 18px;
`;
