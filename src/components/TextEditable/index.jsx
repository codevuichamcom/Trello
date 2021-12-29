import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const { TextArea } = Input
const TextEditable = ({ title, onTextBlur }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(title)
  }, [])

  const onTextFocus = (e) => {
    e.target.focus()
    e.target.select()
  }
  return (
    <TextHeader
      rows={1}
      autoSize
      spellCheck="false"
      onClick={onTextFocus}
      onChange={(e) => setValue(e.target.value)}
      onMouseDown={(e) => e.preventDefault()}
      onBlur={() => {
        onTextBlur(value)
      }}
      placeholder="Any text here ..."
      value={value}
    />
  )
}
const TextHeader = styled(TextArea)`
  background-color: inherit;
  border: 2px solid transparent;
  font-size: inherit;
  font-weight: inherit;
  &:hover {
    border: 2px solid transparent;
    cursor: pointer;
  }
  &:focus {
    border: 2px solid #0079bf;
  }
  &::-webkit-scrollbar {
    --webkit-appearance: none;
  }
`

export default TextEditable
