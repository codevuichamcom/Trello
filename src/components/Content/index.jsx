import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components'

const { Content } = Layout

const ContentStyled = styled(Content)`
  background: rgb(35, 26, 131);
  background: linear-gradient(132deg, rgba(35, 26, 131, 1) 0%, rgba(219, 73, 156, 1) 100%);
`

const ContentComponent = () => {
  return <ContentStyled>Content</ContentStyled>
}

export default ContentComponent
