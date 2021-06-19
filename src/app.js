import React from 'react'
import styled from 'styled-components'

import ResetCSS from './components/shared/reset-css'

import WetboonEditor from './components/edit/webtoon-editor'

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  height: 100vh;
`

/**
 * 컴포넌트의 최상위 부모
 */
function App() {
  return (
    <Container>
      <ResetCSS />
      <WetboonEditor />
    </Container>
  )
}

export default App
