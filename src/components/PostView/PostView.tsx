import { Post as PostProps } from '../types/Unslash';
import Post from './Post';
import './PostView.css';


interface PostViewProps {
    data: PostProps[],
}

const PostView = ({data}:PostViewProps) => {
    return <div className='postView'>  
    {data.map((post:PostProps) => <Post key={post.id} source={post.urls.thumb} user= {post.user}/>)}         
    </div>
}


export default PostView