import LocationIcon from './images/location.svg';

export default function City(props) {
    return (
        <div className="city-card my-4">
            <div className="row justify-content-center align-items-center">
                <div className="col-auto">
                    <img src={"./images/" + props.imageUrl} className="city-bg" alt="city background" />
                </div>
                <div className="col">
                    <div className="mb-2">
                        <img src={LocationIcon} className="location-icon" alt="city background" />
                        <span className="city-name ms-1">{props.location}</span>
                        <a href={props.googleMapsUrl} className="city-location ms-3">View on Google Maps</a>
                    </div>
                    <h3 className="fw-bold mb-3">{props.title}</h3>
                    <p className="start-end-date mb-2">{props.startDate} - {props.endDate}</p>
                    <p className="city-description">
                        {props.description}
                    </p>
                </div>
            </div>
            <hr />
        </div>
    );
}
