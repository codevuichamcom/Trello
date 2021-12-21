import { Layout } from 'antd'
import ContentComponent from './components/Content'
import HeaderComponent from './components/Header'
import SiderComponent from './components/Sider'

import { RightOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useState } from 'react'

const LayoutStyled = styled(Layout)`
  min-height: 100vh;
`

const FixedSiderStyled = styled.div`
  position: fixed;
  top: 20;
  left: 0;
  width: 18px;
  min-height: 100vh;
  background-color: rgba(193, 199, 208, 0.2);
  border-right: 1px solid rgba(54, 58, 64, 0.24);
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
`

function App() {
  const [width, setWidth] = useState('20%')
  const onHideSider = () => {
    setWidth('0%')
  }

  const onShowSider = () => {
    setWidth('20%')
  }
  return (
    <>
      <LayoutStyled>
        <HeaderComponent />
        <Layout>
          <FixedSiderStyled />
          <ArrowRightStyled onClick={onShowSider} />
          <SiderComponent width={width} onHideSider={onHideSider} onShowSider={onHideSider} />
          <ContentComponent />
        </Layout>
      </LayoutStyled>
    </>
  )
}

export default App
