import { motion } from "motion/react"

interface props {
    className: string,
    children: React.ReactNode,
    value: string,
    desc: string

}

export default function MainsectionCard({ children, className, value, desc }: props) {
    return (
        <motion.div 
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1
        }}
        transition={{ delay: 0.5, duration: 1 }}
        className={`${className}`}>
            {children}
            <h2 className="font-bold text-xl">{value}</h2>
            <p className="font-thin text-sm">{desc}</p>
        </motion.div>
    )
}