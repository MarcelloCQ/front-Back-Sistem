import { Navigate, Route } from 'react-router-dom'
import './App.css'
import { PrivateRoutes, PublicRoutes } from './routes/routes'
import { Suspense } from 'react'
import { RoutesWithNotFound } from './utilities/RoutesWithNotFound'
import { AuthGuard } from './guard/AuthGuard'
import { CustomLoader } from './components/CustomLoader/CustomLoader'
import { Login } from './pages/login/Login'
import Private from './pages/private/Private'
import store from './redux/app/store'
import { Provider } from 'react-redux'


function App() {

  return (
    <div className='app'>
      <Suspense fallback={<CustomLoader />}>
        <Provider store={store}>
          <RoutesWithNotFound>
            <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE}/>} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard/>}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
          </RoutesWithNotFound>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
