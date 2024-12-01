import { House, ShoppingBag, Landmark, ChartNoAxesCombined, Settings} from "lucide-react"
import {motion} from "motion/react";

export default function Sidenav() {

    return (
        
        <motion.aside 
        initial={{ x: -100, opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col justify-between gap-4 bg-blue bg-primary-dark item-center p-2 rounded-lg max-h-screen text-white">
            <div className="flex justify-center items-end mt-4 font-bold text-xl"><h2>SARA'S</h2></div>
            <ul className="flex flex-col justify-center items-center gap-2">
                <li>
                    <a href="/">
                        <House color="white" className="h-8" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <ShoppingBag color="white" className="h-8" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <Landmark color="white" className="h-8" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <ChartNoAxesCombined color="white" className="h-8" />
                    </a>
                </li>
            </ul>
            <div className="flex justify-center items-center">
                <a href="">
                    <Settings color="white" className="h-8" />
                </a>
            </div>
        </motion.aside>
    )
    
}