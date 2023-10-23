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


type PageConfig = {
    pageNumber: number,
    query?:string
}

function getRandomIndex(length:number) {
    return Math.floor(Math.random() * length);
  }

const Home = () => {

    const [photos,setPhotos] = useState<Post[]>([]);
    const [isLoading,setIsLoading] =useState(false)
    const [pageConfig,setPageConfig] = useState({pageNumber:1,query:''})
    const [backgroundUrl,setBackgroundUrl] = useState("");


    const fetchPhotos = (pageConfig:PageConfig) => {
        setIsLoading(true);
        getPhotos(pageConfig).then(res => {       
            if(res.length > 0) {
                setBackgroundUrl(res[getRandomIndex(res.length)].urls.full);
            }
            if(pageConfig.pageNumber ===1) {
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

    const setQuery = (query:string) => {
        const config = {...pageConfig, query,pageNumber:1}       
        setPageConfig(config);
        fetchPhotos(config);
    }

    return <PageContainer backgroundUrl={backgroundUrl}>
        {isLoading ? <Loader />: <></>}
        <div className="main">
            <View marginTop={60}>
                <Logo />
            </View>
            <View paddingTop={70} className="header">
                <h1 className="header__title" >Free stock photos for everyone</h1>
                <Text fontSize={16}>We offer the best free stock photo's all in one place</Text>
            </View>
            <SearchTag onTagClick={setQuery} />
            <View marginTop={30} width="50%">
                <SearchBar onSearch={setQuery} />
            </View>
            <View marginTop={70} marginBottom={70}>
                <PostView data={photos} />
            </View>
        </div>
        <Footer />
    </PageContainer>
}


export default Home;