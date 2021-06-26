import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { useUserContext } from '../contexts/user-context'
import { ROUTES } from '../constants'

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`

export default function SigninPage() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })
  const {
    actions: { setUser },
  } = useUserContext()

  const history = useHistory()

  const handleLoginInfo = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async () => {
    // 1. 전체 유저 목록을 불러온다.
    const response = await fetch('http://localhost:5555/users')

    if (response.ok) {
      const users = await response.json()

      // 2. 유저 목록중에 입력받은 이메일을 가진 유저가있는지 찾는다.
      const user = users.find((user) => user.email === loginInfo.email)

      if (!user) {
        window.alert('입력하신 정보를 다시 확인해주세요')
        return
      }

      // 3. 있다면 검색된 유저의 비밀번호와 비교한다.
      if (user.password !== loginInfo.password) {
        window.alert('입력하신 정보를 다시 확인해주세요')
        return
      }

      // 로그인 성공 !
      setUser(user)
      history.push(ROUTES.HOME)
    }
  }

  // const isSubmittable = loginInfo.email && loginInfo.password
  const isSubmittable = Object.values(loginInfo).every((value) => value)

  return (
    <Container>
      <Input
        name="email"
        value={loginInfo.email}
        placeholder="이메일을 입력해주세요"
        onChange={handleLoginInfo}
      />
      <Input
        name="password"
        type="password"
        value={loginInfo.password}
        placeholder="비밀번호를 입력해주세요"
        onChange={handleLoginInfo}
      />
      <Button
        disabled={!isSubmittable}
        onClick={isSubmittable ? handleSubmit : () => {}}
      >
        로그인
      </Button>
    </Container>
  )
}
