import { Container } from '../../components';
import { song } from '../../api/mock-single-song.js';


const Card = (song) => {
    return (
        <div className="card card-image-cover">
            <div className='relative'>
                <img src={song.artist.picture} alt="" />

                <div className="flex items-center gap-2 absolute z-10 bottom-2 right-0 px-2">
                    <span className="badge badge-lg badge-flat-warning">
                        {song.tone}
                    </span>
                    <span className="badge badge-lg badge-flat-warning">
                        {song.bpm}bpm
                    </span>
                </div>
            </div>
            <div className="card-body p-4">
                <h2 className="card-header">
                    {song.title}
                </h2>
                <p className="text-content2">
                    {song.artist.name}
                </p>
            
                <button className='btn btn-solid-error w-28'>
                    <i className="ri-youtube-fill text-xl" />
                </button>
                
            </div>
        </div>
    )
}

export const SongScreen = () => {
    return (
        <Container>
            <div className="flex flex-col-reverse md:flex-row w-full gap-4">

                <div className="md:w-2/3 gap-4">
                    <div className="flex h-64 md:h-full w-full items-center justify-center rounded-3xl border-2 border-dashed border-border bg-gray-1 px-6">

                        {/* <div className="card flex-row p-4 items-center shadow-none">
                            <i className="ri-error-warning-line text-warning"></i>
                            <p>No se pudo obtener la letra para esta canción.</p>
                        </div>  */}



                        <div className="alert alert-warning">
                                <i className="ri-error-warning-line text-warning"></i>
                                <span>No se pudo obtener la letra para esta canción.</span>
                        </div>


                    </div>


                </div>




                {/* Card */}
                <div className='h-full md:sticky top-4'>
                    <Card {...song} />
                </div>


            </div>
        </Container>
    )
}