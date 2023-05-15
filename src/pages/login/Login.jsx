import { useState } from 'react';
import { Logo } from '../../components/Logo/Logo'
import './Login.css'
import { postLogin } from '../../services/api.methods';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../routes/routes';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/features/user/userSlice';

export const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handlerChangeUser = (e) => {
    setUser(e.target.value);
  };

  const handlerChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const userLogin = async() => {
    const data = {
      usuario: user,
      clave: password
    };
    
    const response = await postLogin(data);

    if(response.request.status > 399) {
      alert(`${response.response.data.error}`);
    }
    
    if(response.status >= 200 || response.status < 300) {
      alert(`Bienvenida/o ${response.data.data.nombres} ${response.data.data.apellidos}`)
      dispatch(loginUser(response.data));
      navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true});
    }
  };

  return (
    <>
      <main className='main'>
        <div className='account-login__container'>
          <div className='account-login__img'>
            <Logo
              height={520}
              width={400}
            />
          </div>
          <div className='account-login__credentials'>
            <label htmlFor='user' >
              Username
            </label>
            <input type='text' name='user' id='user' className='input' onChange={handlerChangeUser} />
            <label htmlFor='password' >
              Password
            </label>
            <input type='password' name='password' id='password' className='input' onChange={handlerChangePassword} />
            <div className='button-container'>
              <button className='btn-dark' onClick={userLogin}>Login</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
