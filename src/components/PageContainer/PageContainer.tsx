import Banner from '../Banner/Banner'
import './PageContainer.css'

interface PageContainerProps {
    children: JSX.Element | JSX.Element[]
    backgroundUrl?:string
}

const PageContainer = ({ children,backgroundUrl }: PageContainerProps) => {
    return <div className='container'>
       {backgroundUrl &&  <div className='container__banner'>
            <Banner source={backgroundUrl} height="100%" width="100%" />
        </div>}
        <div className='container__content'>
        {children}
        </div>
    </div>
}


export default PageContainer