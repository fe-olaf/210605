export const fetchLogin = async ({ email, password }) => {
  // 1. 유저 목록을 가져와야합니다.
  const response = await fetch('http://localhost:5555/users')

  if (response.ok) {
    const users = await response.json()

    const user = users.find((user) => user.email === email)

    if (!user || user.password !== password) {
      throw new Error('아이디 또는 비밀번호 정보를 확인해주세요')
    }

    return user
  }

  throw new Error('일시적인 에러가 발생했습니다.')
}
