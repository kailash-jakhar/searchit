import User from "../User/User"
import { Post as PostType, User as UserType } from "../types/Unslash"

interface PostProps {
    data : PostType;
    onClick:(post:PostType) => void
}

const Post = ({data,onClick}:PostProps) => {
    const {urls,user} = data;
    return <div className="post" data-test-id="post" >
        <div className="post__image" data-test-id='post_image' onClick={() => onClick(data)}>
                <img src={urls.thumb} height="100%" width="100%" alt="post" />
        </div>
        <div className="post__user" data-test-id="post_user">
            <User name={user.first_name} avatar={user.profile_image.medium} />
        </div>
    </div>
}

export default Post