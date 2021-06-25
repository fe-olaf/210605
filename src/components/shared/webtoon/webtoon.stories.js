import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ListWebtoon from './list-webtoon'
import RankWebtoon from './rank-webtoon'
import CardWebtoon from './card-weboon'

export default {
  title: 'Webtoon',
  argTypes: {
    isUpdate: { control: 'boolean' },
    title: { control: 'text', defaultValue: '선의의경쟁' },
    author: { control: 'text', defaultValue: '송채윤/심재영' },
    description: {
      control: 'text',
      defaultValue:
        '가나다라마바사 아자차카타파하 가나다라마바사 아자차카타파하',
    },
  },
}

export const 리스트타입 = ({ isUpdate, title, author, description }) => {
  return (
    <BrowserRouter>
      <div style={{ width: 200 }}>
        <ListWebtoon
          webtoon={{
            id: 'edf44e0a-2c73-442d-9d21-3ca79cf6865d',
            title,
            imageUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F748069%2Fthumbnail%2Fthumbnail_IMAG19_9854a59c-e436-4677-99f7-b92b0f135f6e.jpg%22&type=f220_138&service=navermain',
            author,
            isUpdate,
            description,
          }}
        />
      </div>
    </BrowserRouter>
  )
}

export const 카드타입 = ({ title, author, description }) => {
  return (
    <BrowserRouter>
      <CardWebtoon
        webtoon={{
          id: 'edf44e0a-2c73-442d-9d21-3ca79cf6865d',
          title,
          imageUrl:
            'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F748069%2Fthumbnail%2Fthumbnail_IMAG19_9854a59c-e436-4677-99f7-b92b0f135f6e.jpg%22&type=f220_138&service=navermain',
          author,
          description,
        }}
      />
    </BrowserRouter>
  )
}

export const 랭크타입 = () => {
  return (
    <BrowserRouter>
      <RankWebtoon
        webtoon={{
          id: 'edf44e0a-2c73-442d-9d21-3ca79cf6865d',
          title: '선의의경쟁',
          imageUrl:
            'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F748069%2Fthumbnail%2Fthumbnail_IMAG19_9854a59c-e436-4677-99f7-b92b0f135f6e.jpg%22&type=f220_138&service=navermain',
          author: '송채윤/심재영',
          description: '가나다라마바사 아자차카타파하',
          isUpdate: true,
        }}
      />
    </BrowserRouter>
  )
}
