import { DownOutlined } from '@ant-design/icons'
import { Button, Col, Dropdown, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import menu from '../../components/menu'

const HeaderStyled = styled(Row)`
  background: rgb(26, 19, 95);
  background: linear-gradient(90deg, rgba(26, 19, 95, 1) 0%, rgba(96, 35, 88, 1) 100%);
  padding: 0;
  color: white;
  height: 40px;
  align-items: center;
`

const ButtonStyled = styled(Button)`
  background-color: transparent;
  color: #ffffff;
  border: none;
  &:hover {
    background-color: #635a8e;
    color: #ffffff;
  }
`

const HeaderComponent = () => {
  return (
    <HeaderStyled>
      <Col span={18}>
        <img src={logo} alt="" />
        <ButtonStyled>
          <img
            src="https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.d947df93bc055849898e.gif"
            width={75}
            alt=""
          />
        </ButtonStyled>
        <Dropdown overlay={menu} trigger={['click']}>
          <ButtonStyled>
            Workspaces <DownOutlined />
          </ButtonStyled>
        </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
          <ButtonStyled>
            Recent <DownOutlined />
          </ButtonStyled>
        </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
          <ButtonStyled>
            Started <DownOutlined />
          </ButtonStyled>
        </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
          <ButtonStyled>
            Template <DownOutlined />
          </ButtonStyled>
        </Dropdown>
        <ButtonStyled>Create</ButtonStyled>
      </Col>
      <Col span={6}>5</Col>
    </HeaderStyled>
  )
}

export default HeaderComponent
