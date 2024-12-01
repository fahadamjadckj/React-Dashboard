
import avatarIcon from "../assets/avatar.jpg"
import maleAvatarIcon from "../assets/male-avatar.jpg"

interface props {
    className: string
}
export default function Recentmails({ className }: props ) {
    return (
        <div className={`${className} p-4  rounded-lg shadow-lg`}>
            <h3 className="font-bold text-2xl">Recent Emails</h3>
            <br></br>


            {/* / card 1 */}

            <div className="gap-2 grid grid-cols-4 mt-2 max-h-[400px]">
                <div>
                    <img src={avatarIcon} className="rounded-2xl" height={30} width={30} alt="" />
                </div>
                <div>
                    <p>Sarah Williams</p>
                </div>
                <div className="overflow-x-clip">
                    Meeting scheduled
                </div>
                <div>
                    <p>1:24 PM</p>
                </div>
            </div>

            {/* / card 2 */}

            <div className="gap-2 grid grid-cols-4 mt-2 max-h-[400px]">
                <div>
                    {/* <CircleUser color="black" height={30} /> */}
                    <img src={avatarIcon} className="rounded-2xl" height={30} width={30} alt="" />
                </div>
                <div>
                    <p>Hannah Selvester</p>
                </div>
                <div className="overflow-x-clip">
                    Update about inventory sheet
                </div>
                <div>
                    <p>3:12 PM</p>
                </div>
            </div>

            {/* // card 3 */}

            <div className="gap-2 grid grid-cols-4 mt-2 max-h-[400px]">
                <div>
                    {/* <CircleUser color="black" height={30} /> */}
                    <img src={maleAvatarIcon} className="rounded-2xl" height={30} width={30} alt="" />
                </div>
                <div>
                    <p>John Fisher</p>
                </div>
                <div className="overflow-x-clip">
                    Update about inventory sheet
                </div>
                <div>
                    <p>3:12 PM</p>
                </div>
            </div>
        </div>
    )
}