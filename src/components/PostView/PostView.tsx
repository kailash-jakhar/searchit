import { Post as PostType } from '../types/Unslash';
import Post from './Post';
import './PostView.css';


interface PostViewProps {
    data: PostType[],
    onPostClick: (post:PostType) =>void 
}

const PostView = ({data,onPostClick}:PostViewProps) => {
    return <div className='postView'>  
    {data.map((post:PostType) => <Post key={post.id} data={post} onClick={onPostClick} />)}         
    </div>
}


export default PostView