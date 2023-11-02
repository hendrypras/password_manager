import { useContext } from 'react'
import { callAPI } from '../domain/api'
import toast from 'react-hot-toast'
import { PasswordContext } from '../context/PasswordContext'

const useAccountPassword = () => {
  const { setLoading, setErrorMsg, setDataPassword, setDetailAccount } =
    useContext(PasswordContext)
  const savePassword = async data => {
    setLoading(true)
    try {
      await callAPI({ endpoint: '/password', method: 'POST', data })
      toast.success('Save data Password successfully')
    } catch (error) {
      setErrorMsg(error.message)
    } finally {
      setLoading(false)
    }
  }
  const getAllAccountPassword = async category => {
    const endpoint = category ? `/password?category=${category}` : '/password'
    setLoading(true)
    try {
      const res = await callAPI({ endpoint, method: 'GET' })
      if (res) {
        setDataPassword(res)
      }
    } catch (error) {
      setErrorMsg(error.message)
    } finally {
      setLoading(false)
    }
  }

  const deleteAccount = async id => {
    try {
      await callAPI({
        endpoint: `/password/${id}`,
        method: 'DELETE',
      })
      toast.success('Deleted Sucessfully!')
    } catch (error) {
      toast.error(error.message)
    } finally {
      getAllAccountPassword()
    }
  }
  const getAccount = async id => {
    try {
      const res = await callAPI({
        endpoint: `/password/${id}`,
        method: 'GET',
      })

      setDetailAccount(res)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return {
    savePassword,
    getAllAccountPassword,
    deleteAccount,
    getAccount,
  }
}

export default useAccountPassword
