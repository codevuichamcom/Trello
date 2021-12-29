import {
  CalendarOutlined,
  CloseOutlined,
  CopyOutlined,
  DownOutlined,
  EditOutlined,
  EllipsisOutlined,
  FilterOutlined,
  PlusOutlined,
  ProjectOutlined,
  StarOutlined,
  ThunderboltOutlined,
  UserAddOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons'
import { Avatar, Col, Divider, Dropdown, Layout, Row, Space, Typography } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useRef } from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import styled from 'styled-components'
import menu from '../../components/menu'
import TextEditable from '../TextEditable'
import { Container, Draggable } from 'react-smooth-dnd'

import './content.css'

const { Content } = Layout
const { Text } = Typography

const ContentComponent = ({
  padding,
  boardColumns,
  addNewCard,
  applyDropColumn,
  applyDropCard,
  saveBoardColumnTitle,
}) => {
  const [isAddNew, setIsAddNew] = useState('')
  const [newValue, setNewValue] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isAddNew && inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isAddNew])
  const clearIsAddNew = () => {
    setIsAddNew('')
    setNewValue('')
  }
  const onAddCardClick = (boardColumnId) => {
    addNewCard(boardColumnId, newValue)
    clearIsAddNew()
  }

  const onColumnDrop = (dropResult) => {
    applyDropColumn(dropResult)
  }
  const onCardDrop = (boardColumnId, dropResult) => {
    applyDropCard(boardColumnId, dropResult)
  }
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
                <img
                  src="https://lh3.googleusercontent.com/a-/AOh14GhTFDRxiaqfQF8lEYZ5OXYPbevPW6eX9jeeQvnOBw=s96-c-rg-br100"
                  alt=""
                />
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
      <ContainerBoard>
        <Board>
          <Container
            orientation="horizontal"
            onDrop={onColumnDrop}
            getChildPayload={(index) => boardColumns[index]}
            dragHandleSelector=".column-drag-handle"
            dragClass="cards-ghost"
            dropClass="cards-ghost-drop"
            dropPlaceholder={{
              animationDuration: 150,
              showOnTop: true,
              className: 'cards-drop-preview',
            }}
          >
            {boardColumns.map((boardColumn) => {
              return (
                <Draggable key={boardColumn.id}>
                  <BoardColumn>
                    <BoardColumnHeader className="column-drag-handle">
                      <TextEditable
                        onTextBlur={(value) => {
                          saveBoardColumnTitle(boardColumn.id, value)
                        }}
                        title={boardColumn.title}
                      />
                      <ElipStyled />
                    </BoardColumnHeader>
                    <BoardColumnBody>
                      <Container
                        groupName="col"
                        onDrop={(dropResult) => {
                          onCardDrop(boardColumn.id, dropResult)
                        }}
                        getChildPayload={(index) => boardColumn.cards[index]}
                        dragClass="card-ghost"
                        dropClass="card-ghost-drop"
                        dropPlaceholder={{
                          animationDuration: 150,
                          showOnTop: true,
                          className: 'card-drop-preview',
                        }}
                        dropPlaceholderAnimationDuration={200}
                      >
                        {boardColumn.cards.map((card) => (
                          <Draggable key={card.id}>
                            <Card>
                              <TextEditable title={card.title} />
                              <EditIconStyled />
                            </Card>
                          </Draggable>
                        ))}
                      </Container>
                    </BoardColumnBody>
                    {isAddNew && isAddNew === boardColumn.id ? (
                      <>
                        <TextArea
                          ref={inputRef}
                          autoSize
                          style={{ minHeight: '60px', marginBottom: '8px' }}
                          placeholder="Any text here..."
                          value={newValue}
                          onChange={(e) => {
                            setNewValue(e.target.value)
                          }}
                          // onBlur={clearIsAddNew}
                        />
                        <BoardColumnFooter>
                          <Wrapper>
                            <ButtonAddCard
                              onClick={() => {
                                onAddCardClick(boardColumn.id)
                              }}
                            >
                              Add Card
                            </ButtonAddCard>
                            <CloseOutlined onClick={clearIsAddNew} style={{ fontSize: '20px' }} />
                          </Wrapper>
                          <ElipStyled style={{ fontSize: '30px' }} />
                        </BoardColumnFooter>
                      </>
                    ) : (
                      <BoardColumnFooter>
                        <TextFooter
                          onClick={() => {
                            setIsAddNew(boardColumn.id)
                          }}
                        >
                          <PlusOutlined />
                          Add a card
                        </TextFooter>
                        <CopyOutlined />
                      </BoardColumnFooter>
                    )}
                  </BoardColumn>
                </Draggable>
              )
            })}
          </Container>
        </Board>
      </ContainerBoard>
    </ContentStyled>
  )
}

const ContentStyled = styled(Content)``
const HeaderStyled = styled(Row)`
  height: 52px;
  align-items: center;
  padding-left: 10px;
`

const ContainerBoard = styled.div`
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
const BoardColumn = styled.div`
  background-color: #ebecf0;
  width: 271px;
  border-radius: 3px;
  padding: 7px;
  margin-left: 10px;
`
const BoardColumnHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`
const BoardColumnBody = styled.div`
  max-height: calc(100vh - 300px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    --webkit-appearance: none;
  }
  &::-webkit-scrollbar::vertical {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    border-right: 11px solid #dadbe2;
    margin: 10px 0px;
  }
  &::-webkit-scrollbar-thumb {
    border-right: 11px solid #bfc4ce;
  }
`
const BoardColumnFooter = styled(Text)`
  display: flex;
  align-items: center;
  color: #6b778c;
`
const Card = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 10px;
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

const ElipStyled = styled(EllipsisOutlined)`
  color: #213455;
  padding: 8px;
  font-size: 18px;
  &:hover {
    color: #213455;
    background-color: #dadbe2;
    border-radius: 2px;
  }
`

const TextFooter = styled(Text)`
  flex-grow: 1;
  padding: 4px 8px;
  margin-right: 5px;
  &:hover {
    background-color: #dadbe2;
  }
`

const Wrapper = styled(Space)`
  flex-grow: 1;
`

const ButtonAddCard = styled.div`
  background-color: #0079bf;
  padding: 6px 12px;
  color: #f9fcfd;
  border-radius: 2px;
  &:hover {
    background-color: #026aa7;
    color: #ffffff;
    cursor: pointer;
  }
`
export default ContentComponent
