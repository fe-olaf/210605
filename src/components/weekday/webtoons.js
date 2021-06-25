import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import ListWebtoon from '../shared/webtoon/list-webtoon'

const Container = styled.div``
const WebtoonContainer = styled.div`
  width: 33.3%;
  float: left;
`

function Webtoons() {
  const [webtoons, setWebtoons] = useState([])

  useEffect(() => {
    // 1. 서버로부터 값을 받아와서 GET
    // 2. state 로 저장한다
    // 3. 저장된 state 를 기반을 웹툰 리스트를 그린다.

    async function fetchWebtoons() {
      const response = await fetch('http://localhost:5555/webtoons')

      if (response.ok) {
        const data = await response.json()

        setWebtoons(data)
      }
    }

    fetchWebtoons()
  }, [])

  return (
    <Container>
      {webtoons.map((webtoon) => (
        <WebtoonContainer key={webtoon.id}>
          <ListWebtoon webtoon={webtoon} />
        </WebtoonContainer>
      ))}
    </Container>
  )
}

export default Webtoons
