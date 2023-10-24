import './User.css';


interface UserProps {
    avatar: string,
    name: string
}

export const Avatar = ({src}:{src:string}) => {
    return <div className='user__icon'>
        <img src={src} alt='user' />
    </div>
}

const User = ({ avatar, name }: UserProps) => {

    return <div className='user'>
            <Avatar src={avatar} />
        <div className='user_label'>Image by <span className='user_label--drk'>{name}</span></div>
    </div>
}


export default User