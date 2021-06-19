import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ResetCSS from './components/shared/reset-css'

import WebtoonEditPage from './pages/edit'
import WebtoonHomePage from './pages/webtoon-home'
import WebtoonChallengePage from './pages/webtoon-challenge'
import WebtoonWeekdayPage from './pages/webtoon-weekday'
import HomePage from './pages/home'
import SigninPage from './pages/signin'

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

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/webtoon">
            <WebtoonHomePage />
          </Route>
          <Route path="/webtoon/weekday">
            <WebtoonWeekdayPage />
          </Route>
          <Route path="/webtoon/challenge">
            <WebtoonChallengePage />
          </Route>
          <Route path="/webtoon/edit">
            <WebtoonEditPage />
          </Route>
          <Route path="/signin">
            <SigninPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default App
