import App from "./App"
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function PriceCard({ card }) {
    return <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
                <h4 className="my-0 fw-normal text-center">{card.plan}</h4>
                <h1 className="card-title pricing-card-title text-center">${card.price}<small className="text-body-secondary ">/month</small></h1>
            </div>
            <div className="card-body">

                <ul className="list-unstyled mt-3 mb-4 ">
                    {
                        card.features.map((feature, index) => {
                            return <li className="text-left mt-2" key={index}>
                                {feature.enable ? (
                                    <span><FontAwesomeIcon icon={faCheck} />
                                        {feature.name}
                                    </span>
                                ) : (<span><FontAwesomeIcon icon={faXmark} />
                                    {feature.name}
                                </span>)

                                }</li>
                        })
                    }
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">BUTTON</button>
            </div>
        </div>
    </div>


}
export default PriceCard