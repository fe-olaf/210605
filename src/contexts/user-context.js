import React, { createContext, useContext, useEffect, useReducer } from 'react'

const Context = createContext()

// 실제 데이터가 변하는곳
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        user: action.payload,
      }
    }
  }
}
// action 데이터의 변화를 요청

export function UserContextProvider({ children }) {
  // 새로고침 대응
  const [state, dispatch] = useReducer(reducer, {
    user: JSON.parse(localStorage.getItem('user') || null),
  })

  const { user } = state

  // 변화를 한곳에서 처리
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  // 외부에서 액션타입을 몰라도되도록
  const actions = {
    setUser: (user) => {
      dispatch({
        type: 'SET_USER',
        payload: user,
      })
    },
  }

  return (
    <Context.Provider
      value={{
        ...state,
        ...actions,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export function useUserContext() {
  return useContext(Context)
}
