import jsonData from "../utils/data.json"

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default async function getData() {

    // simulates a delay like in real api calls replace this with your own api call.

    await delay(1000)
    return jsonData
}