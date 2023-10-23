import User from "../User/User"
import { User as UserType } from "../types/Unslash"

interface PostProps {
    source:string,
    user:UserType
}

const Post = ({source,user}:PostProps) => {
    return <div className="post">
        <div className="post__image">
                <img src={source} height="100%" width="100%" alt="post" />
        </div>
        <div className="post__user">
            <User name={user.first_name} avatar={user.profile_image.medium} />
        </div>
    </div>
}

export default Post