import { NavLink } from "react-router-dom"
import { AvatarWithDropdown } from "../avatar/Avatar"
import logo from '/logo-caf.svg'


const user = {
    initials: 'fg',
    fullname: 'Franco González',
    role: 'Admin'
}

const activeLink = 'menu-item menu-active'
const normalLink = 'menu-item'

export const AsideBar = () => {
    return (
        <div className="sm:w-full sm:max-w-[18rem]">
            <input type="checkbox" id="sidebar-mobile-fixed" className="sidebar-state" />
            <label htmlFor="sidebar-mobile-fixed" className="sidebar-overlay"/>
            <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
                <section className="sidebar-title items-center p-4 flex gap-4">
                    <img src={ logo } alt="" />
                    <div className="flex flex-col">
                        <span>Dabar</span>
                        <span className="text-xs font-normal text-content2">v0.1.0</span>
                    </div>
                </section>

                <section className="sidebar-content">
                    <nav className="menu rounded-md">
                        <section className="menu-section px-4">
                            <span className="menu-title">Secciones</span>
                            <ul className="menu-items">
                                <NavLink 
                                    to='/' 
                                    className={({ isActive }) => ( isActive ? activeLink : normalLink )}
                                >
                                    <i className="ri-home-2-line text-content2"/>
                                    <span>Inicio</span>
                                </NavLink>
                                

                                <li className="menu-item">
                                    <i className="ri-team-line text-content2"/>
                                    <span>Ensayos</span>
                                </li>
                                <NavLink 
                                    to='/songs' 
                                    className={({ isActive }) => ( isActive ? activeLink : normalLink )}
                                >
                                    <i className="ri-list-check text-content2"/>
                                    <span>Lista de canciones</span>
                                </NavLink>
                            </ul>
                        </section>
                    </nav>
                </section>



                {/* Sección AVATAR */}
                <section className="sidebar-footer justify-end border-t border-gray-600">
                    <AvatarWithDropdown user={ user } menuID='menu-1'>
                        <div className="min-h-0 mx-4 flex flex-col gap-2">
                            <label className="menu-item">Perfil</label>
                            <label className="menu-item">Configuración</label>
                            <label className="btn btn-error flex justify-start mb-4">Cerrar Sesión</label>
                        </div>
                    </AvatarWithDropdown>
                </section>
            </aside>
        </div>
    )
}