import React from 'react'

import ListWebtoon from './list-webtoon'
import RankWebtoon from './rank-webtoon'
import CardWebtoon from './card-weboon'

export default {
  title: 'Webtoon',
}

export const 리스트타입 = () => {
  return (
    <ListWebtoon
      webtoon={{
        id: 'edf44e0a-2c73-442d-9d21-3ca79cf6865d',
        title: '선의의경쟁',
        imageUrl:
          'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F748069%2Fthumbnail%2Fthumbnail_IMAG19_9854a59c-e436-4677-99f7-b92b0f135f6e.jpg%22&type=f220_138&service=navermain',
        author: '송채윤/심재영',
        isUpdate: true,
      }}
    />
  )
}

export const 카드타입 = () => {
  return (
    <CardWebtoon
      webtoon={{
        id: 'edf44e0a-2c73-442d-9d21-3ca79cf6865d',
        title: '선의의경쟁',
        imageUrl:
          'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F748069%2Fthumbnail%2Fthumbnail_IMAG19_9854a59c-e436-4677-99f7-b92b0f135f6e.jpg%22&type=f220_138&service=navermain',
        author: '송채윤/심재영',
        isUpdate: true,
      }}
    />
  )
}

export const 랭크타입 = () => {
  return (
    <RankWebtoon
      webtoon={{
        id: 'edf44e0a-2c73-442d-9d21-3ca79cf6865d',
        title: '선의의경쟁',
        imageUrl:
          'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F748069%2Fthumbnail%2Fthumbnail_IMAG19_9854a59c-e436-4677-99f7-b92b0f135f6e.jpg%22&type=f220_138&service=navermain',
        author: '송채윤/심재영',
        isUpdate: true,
      }}
    />
  )
}
