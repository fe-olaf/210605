import React, { useEffect, createContext, useReducer, useContext } from 'react'

const Context = createContext()

// 실제 값의 변경이 일어나는곳이다.
// state context api 에서 관리하는 상자안에 들어있는 값
// action 사용자가 일으킨 행동
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        user: action.payload, // 아직은 뭔지 몰라요
      }
    }
  }
}

// 감싸는 녀석 값을 제공해준다.
// dispatch 액션을 일으키는 함수 dispatch({ type: 'SET_USER', payload: {} })
export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    user: JSON.parse(window.localStorage.getItem('user') || null),
  })

  useEffect(() => {
    // user 값 변할 때 동작하는 함수
    if (state.user !== null) {
      window.localStorage.setItem('user', JSON.stringify(state.user))
    } else {
      window.localStorage.removeItem('user')
    }
  }, [state.user])

  // 액션은 내부에서 처리한다.
  // 외부에서는 필요한 값만 넘겨줘
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
        state,
        actions,
      }}
    >
      {children}
    </Context.Provider>
  )
}

// context 를 사용하는 쪽에서 사용할 훅
export function useUserContext() {
  return useContext(Context)
}
