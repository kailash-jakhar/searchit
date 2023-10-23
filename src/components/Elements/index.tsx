
interface StyleProps extends React.CSSProperties{
children: JSX.Element | any
className?:string
}

export const View = ({children,className,...style}:StyleProps) => {
    return <div style={style} className={className}>{children}</div>
}

export const Text = ({children,className,...style}:StyleProps) => {
    return <span className={className} style={style}>{children}</span>
}

export const Flex =({children,className,...style}:StyleProps) => {
    return <div className={className} style={{display:'flex',...style}}>{children}</div>
}

