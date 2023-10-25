import { songs } from "../../api/mock-songs"
import { Link } from "react-router-dom"
import { Container, Avatar } from "../../components"


const SongListItem = ( song ) => {
    return (
        <Link 
            className='p-3 rounded-md shadow-md bg-backgroundSecondary flex justify-between items-center  duration-150 ease-in-out hover:bg-border'
            to={`/songs/${ song.id }`}
        >
            <Avatar text={ song.title } subtext={ song.artist.name } image={ song.artist.picture }/>
            <div className="avatar">
                <p className="text-warning">
                    { song.tone }
                </p>
            </div>
        </Link>
    )
}


const SongsGrid = ({ data }) => {
    return (
        <ul className='grid grid-cols-1 md:grid-cols-2 md:max-w-4xl gap-2 mt-4'>
            {
                data.map( song => (
                    <SongListItem { ...song } key={ song.id }/>
                ))
            }
        </ul>
    )
}

export const SongListScreen = () => {
    return (
        <Container>
            
            <div className="flex items-center w-full  gap-2">
                <input className="input input-solid " placeholder="Buscar"/>
                <span className="btn btn-solid-warning">
                    <i className="ri-search-line"/>
                </span>
            </div>
        
            <SongsGrid data={ songs }/>

        </Container>
    )
}