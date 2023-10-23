import './Tag.css';

interface TagProps {
    label: string,
    onClick?:() => void
}

const Tag = ({label,onClick}:TagProps) => {

    return <div className='tag' onClick={onClick}>{label}</div>
}

export default Tag