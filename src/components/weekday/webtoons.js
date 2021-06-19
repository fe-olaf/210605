import React, { useEffect, useState } from 'react'

import ListWebtoon from '../shared/webtoon/list-webtoon'

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
    <div>
      {webtoons.map((webtoon) => (
        <ListWebtoon key={webtoon.id} webtoon={webtoon} />
      ))}
    </div>
  )
}

export default Webtoons
