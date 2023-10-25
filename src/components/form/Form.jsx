import image from '/back.jpg'


const FormContainer = ({ children }) => {
    return (
        <section className="flex justify-center items-center h-screen w-full bg-zinc-900 animate__animated animate__fadeIn">
            { children }
        </section>
    )
}


export const Form = ({ title='Titulo', subtitle= 'Subtitulo',  children }) => {

    return (
        <FormContainer>
            <article className="hidden w-0 relative md:flex md:items-center md:justify-center md:w-3/5">
                <img src={ image } className='hidden md:block md:w-full md:h-screen md:object-cover' alt="" />
                <div className='absolute'>
                    <h1 className='font-bold text-7xl'>{ title }</h1>
                    <p>{ subtitle }</p>
                </div>
                
            </article>
            <article className="flex flex-col gap-6 w-full px-6 mt-8 md:mt-0 md:w-2/5">
                <div className="flex flex-col items-center md:hidden">
                    <h1 className="text-3xl font-semibold"> { title } </h1>
                    <p className="text-sm"> { subtitle } </p>
                </div>
                <form className="form-group">
                    { children }
                </form>
            </article>
        </FormContainer>
    )
}