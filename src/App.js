import { Layout } from 'antd'
import ContentComponent from './components/Content'
import HeaderComponent from './components/Header'
import SiderComponent from './components/Sider'

import { RightOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useState } from 'react'

function App() {
  const [width, setWidth] = useState('260px')
  const onHideSider = () => {
    setWidth('0px')
  }

  const onShowSider = () => {
    setWidth('260px')
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
          <ContentComponent padding={padding} />
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
