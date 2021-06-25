import React from 'react'
import styled from 'styled-components'

import NewWebtoons from '../components/weekday/new-webtoons'
import Webtoons from '../components/weekday/webtoons'

const HR = styled.div`
  border-bottom: 5px solid #eee;
  margin: 25px 0;
`

export default function WebtoonWeekdayPage() {
  return (
    <div>
      <NewWebtoons />
      <HR />
      <Webtoons />
    </div>
  )
}
