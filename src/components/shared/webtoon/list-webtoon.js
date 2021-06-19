import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Image = styled.img``
const Content = styled.div``
const Title = styled.div``
const Author = styled.div``
const Description = styled.div``

function ListWebtoon({ webtoon }) {
  const { title, author, description, imageUrl } = webtoon

  return (
    <Container>
      <Image src={imageUrl} />
      <Content>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Description>{description}</Description>
      </Content>
    </Container>
  )
}

export default ListWebtoon
