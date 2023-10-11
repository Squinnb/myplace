

interface Props {
    date: string;
    condition: string;
    maxTemp: string;
    minTemp: string;
    icon: string;
}

function WeatherDay(props: Props) {
    return ( <div className="weather-card">
        {props.date} <br />
        {props.condition} <br />
        <img src={props.icon} alt="" /> <br /> 
        High: {props.minTemp} <br />
        Low: {props.maxTemp} <br />
    </div> );
}

export default WeatherDay;