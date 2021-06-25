import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import CardWebtoon from '../shared/webtoon/card-weboon'

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding: 20px 10px;
`

const WebtoonContainer = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
`

function NewWebtoons() {
  const [webtoons, setWebtoons] = useState([])

  useEffect(() => {
    // 1. 서버로부터 값을 받아와서 GET
    // 2. state 로 저장한다
    // 3. 저장된 state 를 기반을 웹툰 리스트를 그린다.

    async function fetchWebtoons() {
      const response = await fetch('http://localhost:5555/new')

      if (response.ok) {
        const data = await response.json()

        setWebtoons(data)
      }
    }

    fetchWebtoons()
  }, [])

  return (
    <div>
      <Title>이달의 신작</Title>
      <WebtoonContainer>
        {webtoons.map((webtoon) => (
          <CardWebtoon key={webtoon.id} webtoon={webtoon} width="90%" />
        ))}
      </WebtoonContainer>
    </div>
  )
}

export default NewWebtoons
