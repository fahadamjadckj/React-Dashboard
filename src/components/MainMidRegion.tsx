import Chart from "./Chart"

interface datacell {
  name: string,
  uv: number,
  pv: number,
  amt: number
}

interface props {
    clients: number,
    clientsPlus: number,
    invoices: number,
    invoicesPlus: number,
    data: datacell[], 
    firstKey: string,
    secondKey: string,
    thirdKey: string
}

export default function MainMidRegion({ clients, clientsPlus, invoices, invoicesPlus, data, firstKey, secondKey, thirdKey }: props) {
    return (
        <>
            <div className="flex flex-col justify-center items-start gap-4 col-span-1 bg-primary-fg shadow-lg p-2 rounded-lg">
                    
                <h2 className="font-bold">New Clients</h2>
                <div className="flex justify-start items-center gap-2">
                    <p className="text-4xl">{clients}</p>
                    <p className="bg-primary-postive px-4 py-2 border-lg rounded-lg text-xs">+{clientsPlus}</p>
                </div>
                    
            </div>

            {/* / chart */}

            <div className="flex flex-col justify-center items-start col-span-3 row-span-2 bg-primary-fg rounded-lg">
                <Chart data={data} firstKey={firstKey} secondKey={secondKey} thirdKey={thirdKey} />
            </div>


            {/* / Invoices card */}
            <div className="flex flex-col justify-center items-start gap-4 col-span-1 bg-primary-fg shadow-lg p-2 rounded-lg">
                
                <h2 className="font-bold">Invoices Due</h2>
                <div className="flex justify-start items-center gap-2">
                    <p className="text-4xl">{invoices}</p>
                    <p className="bg-primary-negative px-4 py-2 border-lg rounded-lg text-xs">+{invoicesPlus}</p>
                </div>
                
            </div>
        </>
    )
}