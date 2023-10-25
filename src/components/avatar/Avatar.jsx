export const Avatar = ({ text, subtext, initials, image }) => {

    const avatarInitialsStyle = 'h-0 leading-none text-lg font-bold uppercase'
    return (
        <div className="flex gap-4">
            <div className="avatar flex items-center justify-center"> 
                {
                    image ? 
                        <img src={ image } alt={`Imagen de ${ text }`} />
                    :   
                        <p className={ avatarInitialsStyle }>
                            { initials }
                        </p>
                }
                
            </div>
            <div className="flex flex-col w-36">
                <p className="font-medium truncate">{ text }</p>
                <span className='text-xs text-content3'>{ subtext }</span>
            </div>
        </div>
    )
}

export const AvatarWithDropdown = ({ user, children, menuID }) => {
    return (
        <>
            <input type="checkbox" id={ menuID } className="menu-toggle" />

            <label className="menu-item justify-between rounded-none" htmlFor={ menuID }>
                <div className="flex justify-between py-2 mx-2 w-full">
                    <Avatar 
                        text={ user.fullname } 
                        initials={ user.initials } 
                        subtext={ user.role }
                    />
                    <span className="menu-icon">
                        <i className="ri-arrow-down-s-line text-lg"/>
                    </span>
                </div>
            </label>

            {/* Dropdown content via children*/}
            <div className="menu-item-collapse">
                { children }
            </div>
        </>
    )
}
