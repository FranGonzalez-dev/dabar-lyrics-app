import { Form } from "../../components"
import { useForm } from "../../hooks"

const registerFormFields = {
    email: '',
    nombre: '',
    apellido: '',
    password: ''
}

export const RegisterScreen = () => {

    const { email, nombre, apellido, password, onInputChange } = useForm( registerFormFields );
    return (
        <Form title='Crea tu cuenta' subtitle='Inicia sesión para acceder a la app.'>
            

            <div className="flex gap-2">
                <div className="form-field">
                    
                    
                    <div className='flex items-center gap-2'>
                        <label className="form-label">Nombre</label>
                        {/* <span className="dot dot-xs dot-error"/> */}
                        {/* <label className='text-sm text-error'>Ingrese datos válidos</label> */}
                    </div>

                    <div className="form-control">
                        <input placeholder="Escribe tu correo electrónico" name='nombre' type="text" value={ nombre } onChange={ onInputChange } className="input max-w-full " />
                    </div>
                </div>

                <div className="form-field">
                    
                    
                    <div className='flex items-center gap-2'>
                        <label className="form-label">Apellido</label>
                        {/* <span className="dot dot-xs dot-error"/> */}
                        {/* <label className='text-sm text-error'>Ingrese datos válidos</label> */}
                    </div>

                    <div className="form-control">
                        <input placeholder="Escribe tu correo electrónico" name='apellido' type="text" value={ apellido } onChange={ onInputChange } className="input max-w-full " />
                    </div>
                </div>
            </div>
            

            <div className="form-field">
                

                <div className='flex items-center gap-2'>
                    <label className="form-label">Email</label>
                    {/* <span className="dot dot-xs dot-error"/> */}
                    {/* <label className='text-sm text-error'>Ingrese datos válidos</label> */}
                </div>

                <div className="form-control">
                    <input placeholder="Escribe tu correo electrónico" name='email' type="email" value={ email } onChange={ onInputChange } className="input max-w-full " />
                </div>
            </div>
            <div className="form-field">
                <label className="form-label">Contraseña</label>
                <div className="form-control">
                    <input placeholder="Escriba su contraseña" name='password' value={password} onChange={ onInputChange } type="password" className="input max-w-full" />
                </div>
            </div>
            <div className="form-field">
                <div className="form-control justify-between">
                    {/* <div className="flex gap-2">
                        <input type="checkbox" className="checkbox" />
                        <a href="#">Remember me</a>
                    </div> 
                    <label className="form-label">
                        <a className="link link-underline-hover link-primary text-sm">¿Olvidaste la contraseña?</a>
                    </label>
                    */}
                </div>
            </div>
            <div className="form-field">
                <button type="button" className="btn btn-primary w-full">Iniciar sesión</button>
            </div>

            {/* <div className="form-field">
                <div className="form-control justify-center">
                    <a className="link link-underline-hover link-primary text-sm">¿Aún no tienes cuenta? Regístrate.</a>
                </div>
            </div> */}
            
            
        </Form>    
    )
}