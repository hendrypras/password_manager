import { useEffect, useContext, useState } from 'react'
import style from './style.module.scss'
import { DataGrid } from '@mui/x-data-grid'
import useAccountPassword from '../../hook/useAccountPassword'
import { PasswordContext } from '../../context/PasswordContext'
import { Empty, Modal } from '../../components'
import { useNavigate, useParams, Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
const ListAccountPage = () => {
  const { getAllAccountPassword, deleteAccount } = useAccountPassword()
  const { dataPassword } = useContext(PasswordContext)
  const [accountId, setAccountId] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (params?.category) {
      getAllAccountPassword(params?.category)
    } else {
      getAllAccountPassword()
    }
  }, [params])

  const rows = dataPassword?.map((val, i) => ({
    id: i + 1,
    accountId: val.id,
    provider: val.provider,
    email: val.email,
    password: val.password,
    category: val.category,
  }))

  const handleChangeCategory = e => {
    navigate(`/${e.target.value}`)
  }
  const columns = [
    { field: 'id', headerName: 'No', width: 100 },
    { field: 'provider', headerName: 'Provider', width: 250 },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'category',
      headerName: 'Category',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      type: 'actions',
      getActions: params => [
        <>
          <button
            onClick={() => {
              setShowModal(true)
              setAccountId(params?.row?.accountId)
            }}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'red',
            }}
          >
            <DeleteIcon />
          </button>
          <Link
            to={`/detail/${params?.row?.accountId}`}
            style={{
              backgroundColor: 'gray',
              marginLeft: '10px',
              padding: '4px 10px',
              color: 'white',
              borderRadius: '5px',
            }}
          >
            Detail
          </Link>
        </>,
      ],
    },
  ]
  return (
    <section className={style.container__list__account}>
      <div className={style.wrapper__header}>
        <div>
          <div className={style.wrapper__content__header}>
            <h3>Account:</h3>
            <h4>{dataPassword?.length}</h4>
          </div>
          <div className={style.select__wrapper}>
            <select onChange={handleChangeCategory}>
              <option value="all" defaultValue={'all'} disabled>
                Filter by Category
              </option>
              <option value="">All</option>
              <option value="work">Work</option>
              <option value="family">Family</option>
              <option value="personal">Personal</option>
            </select>
          </div>
        </div>
        <div className={style.btn__add__account}>
          <Link to={'/add-new'}>Add New Account</Link>
        </div>
      </div>
      {dataPassword?.length > 0 ? (
        <>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
          />
          <Modal
            open={showModal}
            close={() => setShowModal(false)}
            text={'are you sure you want to delete this?'}
            oke={() => {
              deleteAccount(accountId)
              setShowModal(false)
            }}
          />
        </>
      ) : (
        <Empty text={'There is no account here, please add an account!'} />
      )}
    </section>
  )
}
export default ListAccountPage
