import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginScreen, RegisterScreen } from "../../screens";
import { Navbar } from '../../components';



export const AuthRouter = () => {
    return (
        <>
            <Navbar />    
            <Routes>
                <Route path='login' element={ <LoginScreen/> }/>
                <Route path='/register' element={ <RegisterScreen/> }/>
                <Route path='/*' element={ <Navigate to='/auth/login'/> }/>
            </Routes>
        </>
        
    )
}