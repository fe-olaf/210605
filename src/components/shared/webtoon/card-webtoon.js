import React from 'react'
import styled from 'styled-components'

import { Link as BaseLink } from 'react-router-dom'
import { ROUTES } from '../../../constants'

const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 90%;

  ${({ width }) => width && `width: ${width};`}
  ${({ display }) => display && `display: ${display};`}
`

const Link = styled(BaseLink)`
  display: block;
  margin-left: 5px;
  position: relative;
  height: 111px;
`

const ThumbnailContainer = styled.div`
  position: absolute;
  overflow: hidden;
  width: 111px;
  height: 100%;
  border-radius: 2px;
`

const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -10%;
  right: -10%;
  width: auto;
  height: 100%;
  margin: auto;
`

const InfoContainer = styled.div`
  padding: 11px 23px 0 129px;
`

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  font-size: 16px;
  line-height: 20px;
`

const Author = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  margin-top: 3px;
  font-size: 13px;
  line-height: 15px;
  color: #999;
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 13px;
  font-size: 13px;
  line-height: 19px;
  color: #4c4c4c;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

function CardWebtoon({ webtoon }) {
  const { id, imageUrl, title, author, description } = webtoon

  return (
    <Container>
      <Link to={`${ROUTES.WEBTOON_HOME}/${id}`}>
        <ThumbnailContainer>
          <Thumbnail src={imageUrl} />
        </ThumbnailContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Author>{author}</Author>
          <Summary>{description}</Summary>
        </InfoContainer>
      </Link>
    </Container>
  )
}

export default CardWebtoon
