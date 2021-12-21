import { Layout } from 'antd'
import React, { useState } from 'react'
import { slideOutLeft } from 'react-animations'
import styled, { css, keyframes } from 'styled-components'
import { LeftOutlined } from '@ant-design/icons'
const { Sider } = Layout

const slideAnimationOut = keyframes`${slideOutLeft}`
const SiderStyled = styled(Sider)`
  background-color: white;
  animation: ${(props) => {
    return props.width === '30%' ? '' : css`1s ${slideAnimationOut} forward`
  }};
`
const RightStyled = styled.div`
  text-align: right;
`
const SiderComponent = ({ width, onHideSider, onShowSider }) => {
  return (
    <SiderStyled width={width}>
      <RightStyled>
        <LeftOutlined onClick={onHideSider} />
      </RightStyled>
    </SiderStyled>
  )
}

export default SiderComponent
