import React from 'react'
import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'

import { ROUTES } from '../../../constants'

const Container = styled.div`
  padding-bottom: 14px;
  width: 100%;
`

const ThumbnailContainer = styled.div`
  overflow: hidden;
  width: 100%;
  padding-top: 100%;
  position: relative;
`
const Image = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -10%;
  right: -10%;
  width: auto;
  height: 100%;
  margin: auto;
`

const Content = styled.div`
  margin-top: 7px;
`

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  font-weight: 400;
`
const Author = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  font-size: 12px;
  color: #999;
  margin-top: 2px;
`
const Badge = styled.div`
  width: 22px;
  height: 12px;
  margin-top: 4px;
  line-height: 12px;
  background: #0fd86f;
  color: #fff;
  text-align: center;
  font-size: 10px;
  border-radius: 6px;
`

const Link = styled(BaseLink)`
  display: block;
  margin-left: 5px;
`

function ListWebtoon({ webtoon, width }) {
  const { id, title, author, imageUrl, isUpdate } = webtoon

  return (
    <Container width={width}>
      <Link to={`${ROUTES.WEBTOON_HOME}/${id}`}>
        <ThumbnailContainer>
          <Image src={imageUrl} />
        </ThumbnailContainer>
        <Content>
          <Title>{title}</Title>
          <Author>{author}</Author>
          {isUpdate && <Badge>UP</Badge>}
        </Content>
      </Link>
    </Container>
  )
}

export default ListWebtoon
