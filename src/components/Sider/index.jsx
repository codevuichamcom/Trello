import { LeftOutlined, TransactionOutlined } from '@ant-design/icons'
import { Avatar, Layout, Typography } from 'antd'
import React from 'react'
import { slideOutLeft } from 'react-animations'
import styled, { css, keyframes } from 'styled-components'
import board from '../../assets/images/board.svg'
import member from '../../assets/images/member.svg'
import setting from '../../assets/images/setting.svg'
import workspace from '../../assets/images/workspace.svg'
import premium from '../../assets/images/premium.svg'
const { Sider } = Layout
const { Text } = Typography

const SiderComponent = ({ width, onHideSider }) => {
  return (
    <SiderStyled width={width}>
      <HeaderSider>
        <NameAvatar shape="square" icon="L" />
        <FlexColumn>
          <Text strong>Le Hong Quan</Text>
          <Text type="secondary">Free</Text>
        </FlexColumn>
        <ArrowRightStyled onClick={onHideSider} />
      </HeaderSider>
      <BodySider>
        <ItemStyled>
          <img src={board} />
          <TextItem>Boards</TextItem>
        </ItemStyled>
        <ItemStyled>
          <img src={member} />
          <TextItem>Members</TextItem>
        </ItemStyled>
        <ItemStyled>
          <img src={setting} />
          <TextItem>Settings</TextItem>
        </ItemStyled>
        <TextTitleStyled>Workspace views</TextTitleStyled>
        <ItemStyled>
          <img src={workspace} />
          <TextItem type="secondary" italic>
            Workspace table
          </TextItem>
        </ItemStyled>
        <TextTitleStyled>Your boards</TextTitleStyled>
      </BodySider>
      <FooterSider>
        <Premium>
          <TransactionOutlined style={{ fontSize: '20px', color: '#FFF' }} />
          <TextItem style={{ color: '#FFF' }} type="secondary" italic>
            Try Premium free
          </TextItem>
        </Premium>
      </FooterSider>
    </SiderStyled>
  )
}

const slideAnimationOut = keyframes`${slideOutLeft}`
const SiderStyled = styled(Sider)`
  display: flex;
  flex-direction: column;
  background-color: #fafbfc;
  animation: ${(props) => {
    return props.width === '0%' || props.width === '0px' ? css`1s ${slideAnimationOut} forward` : ''
  }};
`
const HeaderSider = styled.div`
  padding: 14px 12px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dfe1e6;
`
const NameAvatar = styled(Avatar)`
  background: rgb(204, 67, 35);
  background: linear-gradient(180deg, rgba(204, 67, 35, 1) 0%, rgba(203, 121, 37, 1) 100%);
`
const FlexColumn = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
`

const ArrowRightStyled = styled(LeftOutlined)`
  padding: 10px;
  &:hover {
    background-color: #e8eaee;
    color: #6b778c;
    font-weight: bold;
  }
`

const BodySider = styled.div`
  flex-grow: 1;
`
const FooterSider = styled.div`
  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.2);
  margin-top: 277px;
  background-color: #fff;
  padding: 12px 16px 12px 12px;
`

const ItemStyled = styled.div`
  display: flex;
  padding: 14px 12px 10px;
  &:hover {
    background-color: #e7e9ed;
  }
`
const TextItem = styled(Text)`
  margin-left: 10px;
`

const TextTitleStyled = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: #647188;
  margin-left: 10px;
`

const Premium = styled(ItemStyled)`
  background: linear-gradient(97.78deg, #4423a3 17.5%, #aa63cb 113.39%);
  padding: 6px 12px 6px 6px;
  border-radius: 2px;
`
export default SiderComponent
