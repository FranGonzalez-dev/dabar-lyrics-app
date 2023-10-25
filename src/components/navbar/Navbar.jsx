import logo from '/logo-caf.svg'
import { useLocation, Link } from 'react-router-dom'

export const Navbar = () => {

    const location = useLocation()
    const authStatus = 'not-authenticated'

    return (
        <nav className='flex items-center justify-between w-full px-4 fixed z-10 top-0 '>
            <div className='flex items-center gap-4'>
                <img src={ logo } alt="" />
                <h3 className="font-bold text-white">Dabar</h3>
            </div>
            { authStatus === 'not-authenticated' ? (
                location?.pathname === '/auth/login' ? (
                    <Link className='btn btn-ghost' to='/auth/register'>
                        Regístrate
                    </Link>
                ) : (
                    <Link className='btn btn-ghost' to='/auth/login'>
                        Inicia sesión
                    </Link>
                )
            ) : (
                <button className='btn btn-ghost'>Cerrar sesión</button>
            )}
        </nav>
    )
}

