import { Avatar } from "../User/User";
import { Post } from "../types/Unslash";
import './Popup.css'


interface PopupProps {
    post: Post
    onClose: () => void
}

const Popup = ({ post, onClose }: PopupProps) => {

    return <div className="popup-wrapper">
        <div className="popup">
            <div className="popup__close" >
                <div className="popup__closebtn" onClick={onClose}></div>
            </div>
            <div className="userinfo">
                <div className="userinfo__icon">
                    <Avatar src={post.user.profile_image.medium} />
                </div>
                <div className="userinfo__social">
                    <div className="social__name">{post.user.first_name}</div>
                    <div className="social__userid">@{post.user.username}</div>
                </div>
            </div>
            <div className="preview">
                <img className="preview__img" src={post.urls.regular} alt={post.alt_description} />
            </div>
        </div>
    </div>
}

export default Popup;