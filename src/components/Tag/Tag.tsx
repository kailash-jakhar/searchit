import './Tag.css';

interface TagProps {
    label: string,
    onClick?:() => void
}

const Tag = ({label,onClick}:TagProps) => {

    return <div data-test-id={`tag_${label}`} className='tag' onClick={onClick}>{label}</div>
}

export default Tag