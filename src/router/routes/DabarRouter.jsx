import { Route, Routes } from "react-router-dom";
import { AsideBar } from "../../components";
import { HomeScreen, SongListScreen, SongScreen } from "../../screens";



export const DabarRouter = () => {
    return (
        <div className="flex flex-row sm:gap-4">

            <AsideBar />

            <main className="flex w-full flex-col">

                <div className="navbar px-4 md:navbar-no-boxShadow top-0 z-10 sticky md:hidden">
                    <span className="font-bold navbar-start">Hola, Fran</span>
                    <label htmlFor="sidebar-mobile-fixed" className="btn-ghost btn p-4 sm:hidden">
                        <i className="ri-menu-line" />
                    </label>
                </div>

                <Routes>
                    <Route path='/' element={ <HomeScreen/> }/>
                    <Route path='/songs' element={ <SongListScreen/> }/>
                    <Route path='/songs/:id' element={ <SongScreen/> }/>
                </Routes>
            </main>
        </div>
    )
}