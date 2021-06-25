import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { ROUTES } from '../constants'

/**
 * / 로 들어왔을때 보여질 페이지
 */

/**
 * 1. class component
 * - 컴포넌트의 상태값을 가질 수 있다.
 * - 컴포넌트의 라이프사이클을 제어할 수 있다
 *
 * 2. function component
 * - X
 * - X
 *
 * 세세하게 조절이 필요하고, 상태값을 제어해야한다 -> Class component
 * 그냥 받는값으로 그리기만한다 -> functional component
 *
 * -> 16.8 react hooks
 *
 * function component
 * - 컴포넌트의 상태값을 가질 수 있다.
 * - 라이프사이클을 흉내낼 수 있게되었다.
 */

const DAY_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토']

export default function HomePage() {
  const weekdayLabel = `${DAY_OF_WEEK[moment().day()]}요웹툰`

  return (
    <div>
      <Link to={ROUTES.WEBTOON_HOME}>웹툰홈</Link> |
      <Link to={ROUTES.WEBTOON_WEEKDAY}>{weekdayLabel}</Link> |
      <Link to={ROUTES.WEBTOON_CHALLENGE}>베스트도전</Link>
    </div>
  )
}
