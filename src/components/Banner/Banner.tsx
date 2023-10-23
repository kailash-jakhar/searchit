import './Banner.css'
export interface BannerProps {
    source : string,
    height?:string,
    width?:string
}

const Banner = ({source,height,width}:BannerProps) => {

    return <img className="banner"  src={source} height={height} width={width} alt="banner" />
}

export default Banner