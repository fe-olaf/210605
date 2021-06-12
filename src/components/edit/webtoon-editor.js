import React, { useState } from 'react'

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

  const handleSubmit = () => {
    console.log(webtoon)
  }

  return (
    <div>
      <input
        placeholder="타이틀"
        name="title"
        onChange={handleWebtoon}
        value={title}
      />
      <input
        placeholder="작가"
        name="author"
        onChange={handleWebtoon}
        value={author}
      />
      <input
        placeholder="소개"
        name="description"
        onChange={handleWebtoon}
        value={description}
      />
      <input
        placeholder="이미지"
        name="imageUrl"
        onChange={handleWebtoon}
        value={imageUrl}
      />
      <button onClick={handleSubmit}>등록</button>
    </div>
  )
}

export default WebtoonEditor
