import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`

const Input = styled.input``
const Button = styled.button``

function WebtoonEditor() {
  const [webtoon, setWebtoon] = useState({
    title: '',
    author: '',
    description: '',
    imageUrl: '',
  })

  const { title, author, description, imageUrl } = webtoon

  const handleWebtoon = (event) => {
    setWebtoon({
      ...webtoon,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async () => {
    // GET 가져올때, POST 서버로 보낼떄, DELETE 삭제할떄, PUT 수정할떄\
    // http status code
    // 401 = 인증실패, 404 = 리소스, 요청 주소를 찾을 없다, 500 = 서버에러
    // 200 = 성공 (= ok)

    try {
      const response = await fetch('http://localhost:5555/webtoons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: uuidv4(),
          ...webtoon,
        }),
      })

      if (response.ok) {
        window.alert('데이터 추가가 완료되었습니다 !')
      }
    } catch (e) {
      window.alert('일시적인 에러가 발생했습니다. 잠시 후 다시 이용해주세요')
    }
  }

  return (
    <Container>
      <Input
        placeholder="타이틀"
        name="title"
        onChange={handleWebtoon}
        value={title}
      />
      <Input
        placeholder="작가"
        name="author"
        onChange={handleWebtoon}
        value={author}
      />
      <Input
        placeholder="소개"
        name="description"
        onChange={handleWebtoon}
        value={description}
      />
      <Input
        placeholder="이미지"
        name="imageUrl"
        onChange={handleWebtoon}
        value={imageUrl}
      />
      <Button onClick={handleSubmit}>등록</Button>
    </Container>
  )
}

export default WebtoonEditor
