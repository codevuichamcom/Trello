import { RightOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import boardApi from './apis/boardApi'
import ContentComponent from './components/Content'
import HeaderComponent from './components/Header'
import SiderComponent from './components/Sider'
import faker from 'faker'

function App() {
  const [boardColumns, setBoardColumns] = useState([])
  const [width, setWidth] = useState('260px')

  useEffect(() => {
    const fetchBoard = async () => {
      const boardColumns = await boardApi.getBoardColumns()
      boardColumns.sort((b1, b2) => b1.order - b2.order)
      for (let i = 0; i < boardColumns.length; i++) {
        const boardColumn = boardColumns[i]
        const cards = await boardApi.getAllCardsByBoardColumId(boardColumn.id)
        boardColumn.cards = cards
      }
      setBoardColumns(boardColumns)
    }
    fetchBoard()
  }, [])

  const onHideSider = () => {
    setWidth('0px')
  }
  const addNewCard = (boardColumnId, value) => {
    const newBoardColumns = [...boardColumns]
    const boardColumn = newBoardColumns.find((card) => card.id === boardColumnId)
    boardColumn.cards.push({ id: faker.datatype.uuid(), title: value })
    setBoardColumns(newBoardColumns)
  }
  const onShowSider = () => {
    setWidth('260px')
  }
  const applyDropColumn = (dropResult) => {
    const newBoardColumns = [...boardColumns]
    const orderSrc = newBoardColumns[dropResult.removedIndex]
    const orderDest = newBoardColumns[dropResult.addedIndex]
    boardApi.update(orderSrc.id, { order: orderDest.order })
    boardApi.update(orderDest.id, { order: orderSrc.order })
    newBoardColumns.splice(dropResult.removedIndex, 1)
    newBoardColumns.splice(dropResult.addedIndex, 0, dropResult.payload)
    setBoardColumns(newBoardColumns)
  }
  const applyDropCard = (boardColumnId, dropResult) => {
    if (dropResult.addedIndex !== null || dropResult.removedIndex !== null) {
      const newBoardColumns = [...boardColumns]
      let boardColumnSrc
      let boardColumnDest
      let addedIndex, removedIndex
      //find card source
      if (dropResult.removedIndex !== null) {
        removedIndex = dropResult.removedIndex
        boardColumnSrc = newBoardColumns.find((column) => column.id === boardColumnId)
        const cardsSrc = boardColumnSrc.cards
        cardsSrc.splice(removedIndex, 1)
      }
      //find card destination
      if (dropResult.addedIndex !== null) {
        addedIndex = dropResult.addedIndex
        boardColumnDest = newBoardColumns.find((column) => column.id === boardColumnId)
        const cardsDest = boardColumnDest.cards
        cardsDest.splice(addedIndex, 0, dropResult.payload)
      }
      setBoardColumns(newBoardColumns)
    }
  }
  const saveBoardColumnTitle = (boardColumnId, title) => {
    boardApi.update(boardColumnId, { title })
  }
  const padding = width === '0px' ? '5px 0px 5px 30px' : '5px 0px 5px 10px'
  return (
    <>
      <LayoutStyled>
        <HeaderComponent />
        <LayoutContentStyled>
          <FixedSiderStyled />
          <ArrowRightStyled id="arrowRight" onClick={onShowSider} />
          <SiderComponent width={width} onHideSider={onHideSider} onShowSider={onHideSider} />
          <ContentComponent
            addNewCard={addNewCard}
            applyDropColumn={applyDropColumn}
            applyDropCard={applyDropCard}
            saveBoardColumnTitle={saveBoardColumnTitle}
            boardColumns={boardColumns}
            padding={padding}
          />
        </LayoutContentStyled>
      </LayoutStyled>
    </>
  )
}

const LayoutStyled = styled(Layout)`
  min-height: 100vh;
`

const ArrowRightStyled = styled(RightOutlined)`
  position: fixed;
  top: 50px;
  left: 4px;
  padding: 7px;
  background-color: #6d61a8;
  font-size: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  &:hover {
    background-color: #fafbfc;
    color: #7a869a;
  }
`

const FixedSiderStyled = styled.div`
  position: fixed;
  top: 20;
  left: 0;
  width: 18px;
  height: calc(100vh - 44px);
  background-color: rgba(193, 199, 208, 0.2);
  border-right: 1px solid rgba(54, 58, 64, 0.24);
  &:hover {
    background-color: #7872ab;
  }
`

const LayoutContentStyled = styled(Layout)`
  height: 50vh;
  background: rgb(35, 26, 131);
  background: linear-gradient(132deg, rgba(35, 26, 131, 1) 0%, rgba(219, 73, 156, 1) 100%);
`

export default App
