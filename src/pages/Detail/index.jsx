import style from './style.module.scss'
import useAccountPassword from '../../hook/useAccountPassword'
import { useContext, useEffect, useState } from 'react'
import { PasswordContext } from '../../context/PasswordContext'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Visibility from '@mui/icons-material/Visibility'
import { useNavigate, useParams } from 'react-router-dom'

const DetailPage = () => {
  const { getAccount } = useAccountPassword()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const { detailAccount } = useContext(PasswordContext)
  const params = useParams()
  useEffect(() => {
    if (params?.idPassword) {
      getAccount(params?.idPassword)
    }
  }, [params])

  return (
    <section className={style.detail__container}>
      <div className={style.detail__wrapper}>
        <div className={style.back__btn}>
          <button onClick={() => navigate(-1)}>
            <KeyboardBackspaceIcon className="text" />
            <span className="text">Back</span>
          </button>
        </div>
        <div className={style.card__container}>
          <div className={style.wrapper__content}>
            <h1>Id Account:</h1>
            <h2>{detailAccount?.id}</h2>
          </div>
          <div className={style.wrapper__content}>
            <h1>Provider:</h1>
            <h2>{detailAccount?.provider}</h2>
          </div>
          <div className={style.wrapper__content}>
            <h1>Email:</h1>
            <h2>{detailAccount?.email}</h2>
          </div>
          <div className={style.wrapper__content}>
            <h1>Password:</h1>
            <h2>{showPassword ? detailAccount?.password : '* * * * * *'}</h2>
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>
          <div className={style.wrapper__content}>
            <h1>Category:</h1>
            <h2>{detailAccount?.category}</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailPage
