import { useState, createContext, useMemo } from 'react'

export const PasswordContext = createContext({
  dataPassword: [],
  setDataPassword: () => {},
  detailAccount: {},
  setDetailAccount: () => {},
  errorMsg: '',
  setErrorMsg: () => {},
  loading: Boolean,
  setLoading: () => {},
})

export const PasswordProvider = ({ children }) => {
  const [dataPassword, setDataPassword] = useState([])
  const [detailAccount, setDetailAccount] = useState({})
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const contextValue = useMemo(
    () => ({
      dataPassword,
      setDataPassword,
      errorMsg,
      setErrorMsg,
      loading,
      setLoading,
      detailAccount,
      setDetailAccount,
    }),
    [dataPassword, errorMsg, loading, detailAccount]
  )

  return (
    <PasswordContext.Provider value={contextValue}>
      {children}
    </PasswordContext.Provider>
  )
}
