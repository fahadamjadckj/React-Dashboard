import { Bell, MailPlus, Calendar, NotebookText } from "lucide-react";
import avatarIcon from "../assets/avatar.jpg"
import {motion} from "motion/react"


export default function Rightbar() {
    return (
        <motion.div 
        initial={{
            opacity: 0,
            scale: 0
        }}
        animate={{
            opacity: 1,
            scale: 1
        }}
        transition={{duration: 1, delay: 1.5}}
        className="col-span-1 bg-primary-light p-4 rounded-lg max-h-screen">
            
            {/* / right header */}
            <div className="flex justify-center items-center gap-4">
                <div>
                    <a href="/"><Bell color="black" height={20} width={20} /></a>
                </div>
                <div>
                    <a href="/"><MailPlus color="black" height={20} width={20} /></a>
                </div>
                <div>
                    <a href="/"><Calendar color="black" height={20} width={20} /></a>
                </div>
                <div>
                    <img src={avatarIcon} className="rounded-2xl" height={30} width={30} />
                </div>
            </div>

            {/* / Formation status Card */}

            <div className="bg-primary-dark mt-4 p-4 rounded-2xl w-full text-white">
                <h3 className="font-semibold text-lg">Formation Status</h3>
                <p className="font-light text-thin text-xs">In Progress</p>
                <div className="mt-2 h-8">
                    <div className="bg-primary-fg rounded-lg w-[65%] h-4"></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="font-semibold text-sm">Estimated processing</p>
                    <p className="font-extralight text-xs">4-5 Business Days</p>
                </div>

                <div>
                    <button className="bg-primary-fg mt-2 px-4 py-2 rounded-sm w-full font-semibold text-black">View Status</button>
                </div>
            </div>

            {/* / Todo List */}
            <br></br>
            <div className="">
                <h3 className="font-semibold text-left text-lg">Your to-Do list</h3>
            </div>
            <br></br>

            {/* / todo list grid */}
            {/* // item 1 */}
            <div className="flex flex-col justify-center gap-4">
                <div className="flex gap-4">
                    <div className="flex justify-center items-center bg-black p-2 rounded-xl w-10">
                        <NotebookText color="white" height={30} width={30} />
                    </div>
                    <div>
                        <p className="font-semibold">Run payoff</p>
                        <p className="font-thin text-xs">Mar, 12 2024</p>
                    </div>
                </div>
            {/* / item 2 */}
                <div className="flex gap-4">
                    <div className="flex justify-center items-center bg-black p-2 rounded-xl w-10">
                        <NotebookText color="white" height={30} width={30} />
                    </div>
                    <div>
                        <p className="font-semibold">Restock</p>
                        <p className="font-thin text-xs">Mar, 11 2024</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex justify-center items-center bg-black p-2 rounded-xl w-10">
                        <NotebookText color="white" height={30} width={30} />
                    </div>
                    <div>
                        <p className="font-semibold">Shipping</p>
                        <p className="font-thin text-xs">April, 2 2024</p>
                    </div>
                </div>

            </div>

        </motion.div>
    )
}