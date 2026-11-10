// fetch xml data of one year from the treasury endpoints 
import { XMLParser } from "fast-xml-parser";

let url = "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2026"

export async function fetchYearXML(){
    const response = await fetch(url)

    if (!response.ok){
        throw new Error (`Error hogyo`)
    }

    return response.text() 
}

const xml = await fetchYearXML()
console.log(xml)

const parser = new XMLParser()

console.log(parser.parse(xml).feed.entry[0])




