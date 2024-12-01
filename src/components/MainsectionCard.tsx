

interface props {
    className: string,
    children: React.ReactNode,
    value: string,
    desc: string

}

export default function MainsectionCard({ children, className, value, desc }: props) {
    return (
        <div className={`${className}`}>
            {children}
            <h2 className="font-bold text-xl">{value}</h2>
            <p className="font-thin text-sm">{desc}</p>
        </div>
    )
}