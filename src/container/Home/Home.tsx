import { useEffect, useState } from "react";
import { Text, View } from "../../components/Elements";
import { Footer } from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import PageContainer from "../../components/PageContainer/PageContainer";
import PostView from "../../components/PostView/PostView";
import SearchBar from "../../components/SearchBar/SearchBar";
import './Home.css'
import SearchTag from "./SearchTag";
import { getPhotos } from "../../services/unsplash";
import { Post } from "../../components/types/Unslash";
import Loader from "../../components/Loader";
import Popup from "../../components/Popup/Popup";


type PageConfig = {
    page: number,
    query?:string
}

function getRandomIndex(length:number) {
    return Math.floor(Math.random() * length);
  }

const Home = () => {

    const [photos,setPhotos] = useState<Post[]>([]);
    const [isLoading,setIsLoading] =useState(false)
    const [pageConfig,setPageConfig] = useState({page:1,query:''})
    const [backgroundUrl,setBackgroundUrl] = useState("");
    const [selectedPost,setSelectedPost] = useState<Post | null>(null)


    const fetchPhotos = (pageConfig:PageConfig) => {
        setIsLoading(true);
        getPhotos(pageConfig).then(res => {       
            if(res.length > 0) {
                setBackgroundUrl(res[getRandomIndex(res.length)].urls.full);
            }
            if(pageConfig.page ===1) {
                setPhotos(res);
            } else {
                setPhotos(photos => [...photos,...res]);
            }
            setIsLoading(false)
        });
    }


    useEffect(() => {
        fetchPhotos(pageConfig);
    },[])

    const loadMore = () => {
        const config = { ...pageConfig,page: pageConfig.page + 1 }       
        setPageConfig(config);
        fetchPhotos(config);
    }

    const setQuery = (query:string) => {
        const config = {...pageConfig, query,page:1}       
        setPageConfig(config);
        fetchPhotos(config);
    }

    return <PageContainer backgroundUrl={backgroundUrl}>
        {isLoading ? <Loader />: <></>}
        <div className="main">
            <View marginTop={60}>
                <Logo />
            </View>
            <div className="header">
                <h1 className="header__title" >Free stock photos for everyone</h1>
                <Text fontSize={16}>We offer the best free stock photo's all in one place</Text>
            </div>
            <SearchTag onTagClick={setQuery} />
            <div className="searchContainer">
                <SearchBar onSearch={setQuery} query={pageConfig.query} />
            </div>
            <View marginTop={70} marginBottom={70}>
                <PostView data={photos} onPostClick={setSelectedPost} />
            </View>
            {photos.length > 0 ? <div className="loadMore">
                <button className="loadMore__btn" onClick={loadMore}>Load more</button>
            </div>: null}
        </div>
        <Footer onTagClick={setQuery} />
        {selectedPost ? <Popup post = {selectedPost} onClose={()=>setSelectedPost(null)} />: <></>}
    </PageContainer>
}


export default Home;