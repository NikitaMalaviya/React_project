import React from 'react'

export default function Accordian({ acData }) {
    console.log("acData", acData);
    return (
        <>
            {

                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="accordion accordion-flush" id={`accordionFlushExample${acData.id}`}>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id={`flush-heading${acData.id}`}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${acData.id}`} aria-expanded="false" aria-controls={`flush-collapse${acData.id}`}>
                                        {acData.title}
                                    </button>
                                </h2>
                                <div id={`flush-collapse${acData.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${acData.id}`} data-bs-parent={`#accordionFlushExample${acData.id}`}>
                                    <div className="accordion-body">{acData.dec}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>

            }
            {/* <div className="accordion accordion-flush" id={`accordionFlushExample${acData.id}`}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`flush-heading${acData.id}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${acData.id}`} aria-expanded="false" aria-controls={`flush-collapse${acData.id}`}>
                            {acData.title}
                        </button>
                    </h2>
                    <div id={`flush-collapse${acData.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${acData.id}`} data-bs-parent={`#accordionFlushExample${acData.id}`}>
                        <div className="accordion-body">{acData.dec}</div>
                    </div>
                </div>
            </div> */}
        </>
    )
}