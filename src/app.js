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

import { UserContextProvider } from './contexts/user-context'

import { ROUTES } from './constants'

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
      <UserContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <HomePage />
            </Route>
            <Route exact path={ROUTES.WEBTOON_HOME}>
              <WebtoonHomePage />
            </Route>
            <Route path={ROUTES.WEBTOON_WEEKDAY}>
              <WebtoonWeekdayPage />
            </Route>
            <Route path={ROUTES.WEBTOON_CHALLENGE}>
              <WebtoonChallengePage />
            </Route>
            <Route path={ROUTES.WEBTOON_EDIT}>
              <WebtoonEditPage />
            </Route>
            <Route path={ROUTES.SIGNIN}>
              <SigninPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </UserContextProvider>
    </Container>
  )
}

export default App
