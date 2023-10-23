import './User.css';


interface UserProps {
    avatar?: string,
    name:string
}

const User = ({avatar,name}:UserProps)  => {

    return <div className='user'>
        <div className='user__icon'>
            <img src={avatar} alt='user' />
        </div>
        <div className='user_label'>Image by <span className='user_label--drk'>{name}</span></div>
    </div>
}


export default User