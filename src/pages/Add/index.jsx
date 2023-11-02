import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import style from './style.module.scss'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import useAccountPassword from '../../hook/useAccountPassword'
import { useState } from 'react'
import SaveIcon from '@mui/icons-material/Save'
import LoadingButton from '@mui/lab/LoadingButton'
import toast from 'react-hot-toast'
import { useContext } from 'react'
import { PasswordContext } from '../../context/PasswordContext'
import { Link } from 'react-router-dom'
const AddPage = () => {
  const { savePassword } = useAccountPassword()
  const { loading } = useContext(PasswordContext)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const [inputField, setInputField] = useState({
    provider: '',
    email: '',
    password: '',
    confPassword: '',
    category: '',
  })
  const handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    setInputField(prevInputField => ({
      ...prevInputField,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (
      !inputField.category ||
      !inputField.email ||
      !inputField.password ||
      !inputField.provider
    ) {
      toast.error('Input Field is Required')
    } else if (inputField.email && !regex.test(inputField.email)) {
      toast.error('Invalid email format')
    } else if (inputField.password.length <= 6) {
      toast.error('Password minimal is 6 characters')
    } else if (inputField.password !== inputField.confPassword) {
      toast.error('Password and confirm password must be match')
    } else {
      savePassword(inputField)
      setInputField({
        provider: '',
        email: '',
        password: '',
        confPassword: '',
        category: '',
      })
    }
  }
  return (
    <section className={style.container__home}>
      <div className={style.wrapper__btn__back}>
        <Link to={'/'}>List Account</Link>
      </div>
      <form action="#" className={style.form__Wrapper}>
        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-provider">
            provider
          </InputLabel>
          <Input
            type="provider"
            name="provider"
            onChange={handleInputChange}
            value={inputField.provider}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
          <Input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputField.email}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            onChange={handleInputChange}
            value={inputField.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={e => e.preventDefault()}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Confirm Password
          </InputLabel>
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confPassword"
            onChange={handleInputChange}
            value={inputField.confPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  onMouseDown={e => e.preventDefault()}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '30%' }}>
          <InputLabel>Category</InputLabel>
          <Select
            autoWidth
            label="Category"
            name="category"
            onChange={handleInputChange}
            value={inputField.category}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'work'}>Work</MenuItem>
            <MenuItem value={'personal'}>Personal</MenuItem>
            <MenuItem value={'family'}>Family</MenuItem>
          </Select>
        </FormControl>
        <LoadingButton
          color="primary"
          loadingPosition="start"
          startIcon={<SaveIcon />}
          loading={loading}
          variant="contained"
          onClick={handleSubmit}
        >
          <span>Save</span>
        </LoadingButton>
      </form>
    </section>
  )
}
export default AddPage
