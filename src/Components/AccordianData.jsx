import Accordian from "./Accordian";
import React, { useState } from 'react'

export default function AccordianData() {

    const [accordianData, setAccordianData] = useState([
        {
            title: " Can I Trial Video Before playing",
            id: "One",
            dec: 'lorem  cjhb Notice the use of %PUBLIC_URL% in the tags above It will be replaced with the URL of the  folder during the build Only files inside the folder can be referenced from the HTML.'
        },
        {
            title: " what is a project",
            id: "To",
            dec: 'lorem  cjhb Notice the use of %PUBLIC_URL% in the tags above It will be replaced with the URL of the  folder during the build Only files inside the folder can be referenced from the HTML.'
        },
        {
            title: " Can I Trial Video Before playing",
            id: "TWO",
            dec: 'lorem  cjhb Notice the use of %PUBLIC_URL% in the tags above It will be replaced with the URL of the  folder during the build Only files inside the folder can be referenced from the HTML.'
        },
        {
            title: " Can I Trial Video Before playing",
            id: "two",
            dec: 'lorem  cjhb Notice the use of %PUBLIC_URL% in the tags above It will be replaced with the URL of the  folder during the build Only files inside the folder can be referenced from the HTML.'
        }
    ])
    return (
        <React.Fragment key={accordianData}>

            <h1 className='acc-heading'>faq</h1>
            {
                accordianData.map((acData) => {
                    return <Accordian key={acData.id} acData={acData} />



                })
            }
        </ React.Fragment>
    )
}   