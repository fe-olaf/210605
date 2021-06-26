import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ROUTES } from '../../constants'
import { useUserContext } from '../../contexts/user-context'

const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Button = styled.div`
  width: 64px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
  margin-right: 15px;
`

function Header() {
  const {
    state: { user },
    actions: { setUser },
  } = useUserContext()

  const handleLogout = () => {
    setUser(null) // 로그아웃
  }

  return (
    <Container>
      {user ? (
        <Button onClick={handleLogout}>로그아웃</Button>
      ) : (
        <Button>
          <Link to={ROUTES.SIGNIN}>로그인</Link>
        </Button>
      )}
    </Container>
  )
}

export default Header
