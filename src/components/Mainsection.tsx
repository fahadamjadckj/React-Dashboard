import { HandCoins, ChartPie, IdCard, CreditCard } from "lucide-react"
import Recentmails from "./Recentmails"
import MainsectionCard from "./MainsectionCard"
import MainMidRegion from "./MainMidRegion"
import { useQuery } from "@tanstack/react-query"
import getData from "../utils/data"
import { LoaderCircle } from "lucide-react"
import { motion } from "motion/react"

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },    
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Mainsection() {

    const query = useQuery({ queryKey: ['dashData'], queryFn: getData })

    // sets the loading screen

    if(query.isLoading) {
        return (
            <motion.main className="flex justify-center items-center col-span-4 p-6 w-full">

              <motion.div animate={{rotate: 360}} transition={{duration: 1}} className="flex justify-center items-center"><LoaderCircle height={100} /></motion.div>
              <h1 className="m-4">loading</h1>
              
               
            </motion.main>
        )
    }

    // sets the main screen on success but this doesnt use fetched data!

    if (query.isSuccess) {
        return (
        <motion.main className="gap-4 col-span-4 rounded-lg">
            <motion.h1
              initial={{x: -100}}
              animate={{x: 0}}
              transition={{duration: 1}}
            className="col-span-4 font-semibold text-2xl">Good Morning, Fahad!</motion.h1>
            <div className="gap-4 grid grid-cols-4 grid-rows-8">
                

            {/* row 1 */}

            
                {/* / card 1 */}

                <MainsectionCard value="$143, 210" desc="Your bank balance" className="align-top flex flex-col justify-center items-start gap-4 col-span-1 bg-primary-fg shadow-lg mt-12 p-2 rounded-lg">
                    <HandCoins color="black" height={40} width={40} />
                </MainsectionCard>

                {/* / card 2 */}


                <MainsectionCard value={"12"} desc="Uncategorized Transaction" className="flex flex-col justify-center items-start gap-4 col-span-1 bg-primary-fg shadow-lg mt-12 p-2 rounded-lg">
                        <ChartPie color="black" height={40} width={40} />
                </MainsectionCard>

                {/* / card 3 */}

                <MainsectionCard value="12" desc="Employees working today" className="flex flex-col justify-center items-start gap-4 col-span-1 bg-primary-fg shadow-lg mt-12 p-2 rounded-lg">
                    <IdCard color="black" height={40} width={40} />
                </MainsectionCard>

                {/* / card 4 */}

                <MainsectionCard value="$3,462" desc="Available for withdrawl" className="flex flex-col justify-center items-start gap-4 col-span-1 bg-primary-fg shadow-lg mt-12 p-2 rounded-lg">
                    <CreditCard color="black" height={40} width={40} />
                </MainsectionCard>


                {/* / 2nd, 3rd row */}

                <MainMidRegion clients={52} clientsPlus={12} invoices={37} invoicesPlus={6} data={data} firstKey="uv" secondKey="pv" thirdKey="amt" />

                {/* / orders section row 4th 5th */}

                <Recentmails className="col-span-4 bg-primary-fg max-h-400px" />


            </div>
        </motion.main>
    )
    }

    
}