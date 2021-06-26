import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../constants'
import { useUserContext } from '../contexts/user-context'
import Header from '../components/shared/header'

const DAY_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토']

export default function HomePage() {
  const {
    state: { user },
  } = useUserContext()

  const weekdayLabel = `${DAY_OF_WEEK[new Date().getDay()]}요웹툰`

  return (
    <div>
      <Header />
      <Link to={ROUTES.WEBTOON_HOME}>웹툰홈</Link>
      <Link to={ROUTES.WEBTOON_WEEKDAY}>{weekdayLabel}</Link>
      <Link to={ROUTES.WEBTOON_CHALLENGE}>베스트도전</Link>

      {user && (
        <div>
          <div>{user.name}님을 위한 추천 웹툰</div>
        </div>
      )}
    </div>
  )
}
