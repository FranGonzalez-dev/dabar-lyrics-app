import { useForm } from '../../hooks'
import { Form, FormInput } from '../../components'
import { GoogleLogo } from '../../assets/GoogleLogo.jsx'


const loginFormFields = {
    email: '',
    password: ''
}


export const LoginScreen = () => {

    const { email, password, onInputChange } = useForm( loginFormFields )

    return (
        <Form title='Hola!' subtitle='Inicia sesión para acceder a la app.'>

            <FormInput 
                type        = 'email'
                name        = 'email'
                label       = 'Email'
                value       = { email }
                action      = { onInputChange }
                placeholder = 'Ingrese su email'
            />

            <FormInput 
                type        = 'password'
                name        = 'password'
                label       = 'Contraseña'
                value       = { password }
                action      = { onInputChange }
                placeholder = 'Ingrese su contraseña'
            />
            
            <div className="form-field">
                <div className="form-control justify-between">
                    <label className="form-label">
                        <a className="link link-underline-hover link-primary text-sm">¿Olvidaste la contraseña?</a>
                    </label>
                </div>
            </div>
            <div className="form-field">
                <button type="button" className="btn btn-primary w-full">Iniciar sesión</button>
            </div>

            <div className="divider my-3 text-xs text-content2">O ingresa con</div>
            <button type="button" className="btn gap-2 bg-gray-5">
                <GoogleLogo />
                <span>Google</span>
            </button>
        </Form>    
    )
}