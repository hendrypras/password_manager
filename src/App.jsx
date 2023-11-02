import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DetailPage, AddPage, ListAccountPage } from './pages'
import { Layout } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListAccountPage />} />
          <Route path=":category" element={<ListAccountPage />} />
          <Route path="add-new" element={<AddPage />} />
          <Route path="detail/:idPassword" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
