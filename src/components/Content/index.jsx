import {
  DownOutlined,
  EditOutlined,
  ProjectOutlined,
  StarOutlined,
  UsergroupDeleteOutlined,
  UserOutlined,
  UserAddOutlined,
  CalendarOutlined,
  ThunderboltOutlined,
  FilterOutlined,
  EllipsisOutlined,
} from '@ant-design/icons'
import { Col, Divider, Dropdown, Layout, Row, Space, Typography, Avatar } from 'antd'
import React from 'react'
import styled from 'styled-components'
import menu from '../../components/menu'

const { Content } = Layout
const { Text } = Typography

const ContentComponent = ({ padding }) => {
  return (
    <ContentStyled style={{ padding: padding }}>
      <HeaderStyled>
        <Col span={14}>
          <Space>
            <Dropdown overlay={menu} trigger={['click']}>
              <ButtonStyled>
                <ProjectOutlined style={{ marginRight: '6px' }} />
                Board <DownOutlined style={{ marginLeft: '6px' }} />
              </ButtonStyled>
            </Dropdown>
            <AppName>Trello Clone</AppName>
            <StarStyled>
              <StarOutlined />
            </StarStyled>
            <DividerStyled type="vertical" />
            <AppName>Lê Hồng Quân</AppName>
            <DividerStyled type="vertical" />
            <ButtonStyled>
              <UsergroupDeleteOutlined style={{ marginRight: '6px' }} />
              Workspace visible
            </ButtonStyled>
            <DividerStyled type="vertical" />
            <Avatar
              size="medium"
              icon={
                <img src="https://lh3.googleusercontent.com/a-/AOh14GhTFDRxiaqfQF8lEYZ5OXYPbevPW6eX9jeeQvnOBw=s96-c-rg-br100" />
              }
            />
            <InviteStyled>
              <UserAddOutlined style={{ marginRight: '6px' }} />
              Invite
            </InviteStyled>
          </Space>
        </Col>
        <Col
          span={10}
          style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '10px' }}
        >
          <Space>
            <ButtonStyled>
              <CalendarOutlined style={{ marginRight: '6px' }} />
              Calendar Power-up
            </ButtonStyled>
            <ButtonStyled>
              <ThunderboltOutlined style={{ marginRight: '6px' }} />
              Automation
            </ButtonStyled>
            <DividerStyled type="vertical" />
            <ButtonStyled>
              <FilterOutlined style={{ marginRight: '6px' }} />
              Filter
            </ButtonStyled>
            <ButtonStyled>
              <EllipsisOutlined style={{ marginRight: '6px' }} />
              Show Menu
            </ButtonStyled>
          </Space>
        </Col>
      </HeaderStyled>
      <Container>
        <Board>
          <Card>
            <CardHeader>
              <TextHeader>In Progress</TextHeader>
            </CardHeader>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
          </Card>
          <Card>
            <CardHeader>
              <TextHeader>In Progress</TextHeader>
            </CardHeader>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
          </Card>
          <Card>
            <CardHeader>
              <TextHeader>In Progress</TextHeader>
            </CardHeader>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
          </Card>
          <Card>
            <CardHeader>
              <TextHeader>In Progress</TextHeader>
            </CardHeader>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
          </Card>
          <Card>
            <CardHeader>
              <TextHeader>In Progress</TextHeader>
            </CardHeader>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
          </Card>
          <Card>
            <CardHeader>
              <TextHeader>In Progress</TextHeader>
            </CardHeader>
            <CardItem>
              <Text style={{ flex: 1 }}>Setting layout</Text>
              <EditIconStyled />
            </CardItem>
          </Card>
        </Board>
      </Container>
    </ContentStyled>
  )
}

const ContentStyled = styled(Content)``
const HeaderStyled = styled(Row)`
  height: 52px;
  align-items: center;
  padding-left: 10px;
`

const Container = styled.div`
  height: calc(100vh - 106px);
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    --webkit-appearance: none;
  }
  &::-webkit-scrollbar::horizontal {
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    background: rgb(71, 36, 143);
    background: linear-gradient(90deg, rgba(71, 36, 143, 1) 0%, rgba(182, 61, 134, 1) 100%);
    height: 5px;
    border-radius: 8px;
    margin: 0px 100px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(145, 123, 188);
    background: linear-gradient(90deg, rgba(145, 123, 188, 1) 0%, rgba(195, 135, 183, 1) 100%);
    border-radius: 8px;
  }
`
const Board = styled.div`
  display: flex;
  align-items: flex-start;
  width: 200%;
`
const Card = styled.div`
  background-color: #ebecf0;
  width: 271px;
  border-radius: 3px;
  padding: 7px;
  margin-left: 10px;
  max-height: 550px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    --webkit-appearance: none;
  }
  &::-webkit-scrollbar::vertical {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    border-left: 11px solid #dadbe2;
    margin: 40px 0px 20px 0px;
  }
  &::-webkit-scrollbar-thumb {
    border-left: 11px solid #bfc4ce;
  }
`
const CardHeader = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`

const TextHeader = styled(Text)`
  padding-left: 10px;
  color: #172b4d;
  font-weight: 600;
`
const CardItem = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 6px 8px 2px;
  box-shadow: 0 1px 0 #091e4240;
  &:hover {
    background-color: #f4f5f7;
    cursor: pointer;
  }
`
const EditIconStyled = styled(EditOutlined)`
  padding: 8px;
  color: #fff;
  border-radius: 3px;
  &:hover {
    color: #000;
    background-color: #ebecf0;
  }
`

const ButtonStyled = styled.div`
  background-color: #52499a;
  opacity: 0.9;
  padding: 6px 10px;
  border-radius: 3px;
  border: none;
  color: #fff;
  &:hover {
    background-color: #6860a7;
    color: #fff;
  }
`
const AppName = styled(ButtonStyled)``
const InviteStyled = styled(ButtonStyled)`
  background-color: #ffffff;
  color: #474747;
  &:hover {
    background-color: #eeeaf2;
    color: #474747;
  }
`
const StarStyled = styled(ButtonStyled)`
  font-size: 14px;
  &:hover {
    color: #ceb529;
    font-size: 16px;
  }
`

const DividerStyled = styled(Divider)`
  height: 16px;
  border-left: 1px solid #ffffff3d;
`
export default ContentComponent
