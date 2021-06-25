import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ROUTES } from '../constants'

import { useUserContext } from '../contexts/user-context'
import ListWebtoon from '../components/shared/webtoon/list-webtoon'

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

const RecommendWebtoonContainer = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
`

const WebtoonContainer = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 40%;
`

const DAY_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토']

export default function HomePage() {
  const [webtoons, setWebtoons] = useState([])

  const weekdayLabel = `${DAY_OF_WEEK[moment().day()]}요웹툰`

  const { user } = useUserContext()

  useEffect(() => {
    async function fetchWebtoons() {
      const response = await fetch('http://localhost:5555/webtoons')

      if (response.ok) {
        const data = await response.json()

        setWebtoons(data)
      }
    }

    if (user) {
      fetchWebtoons()
    } else {
      setWebtoons([])
    }
  }, [user])

  return (
    <div>
      <Link to={ROUTES.WEBTOON_HOME}>웹툰홈</Link> |
      <Link to={ROUTES.WEBTOON_WEEKDAY}>{weekdayLabel}</Link> |
      <Link to={ROUTES.WEBTOON_CHALLENGE}>베스트도전</Link>
      <RecommendWebtoonContainer>
        {webtoons.map((webtoon) => (
          <WebtoonContainer key={webtoon.id}>
            <ListWebtoon webtoon={webtoon} />
          </WebtoonContainer>
        ))}
      </RecommendWebtoonContainer>
    </div>
  )
}
