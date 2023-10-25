import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRouter, DabarRouter } from "./routes";



export function AppRouter () {

    const authStatus = 'authenticated'

    return (
        <Routes>
            {
                ( authStatus === 'not-authenticated')
                ? <Route path="/auth/*" element={ <AuthRouter/> } />
                : <Route path="/*" element={ <DabarRouter/> }/>
            }
            <Route path='/*' element={ <Navigate to='/auth/login'/> }/>
        </Routes>
    )
}