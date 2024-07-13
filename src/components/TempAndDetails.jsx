import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { GiSunrise, GiSunset } from "react-icons/gi";

const TempAndDetails = (weather) => {
  const details = weather.weather.formattedCurrentWeather.details;
  const icon = weather.weather.formattedCurrentWeather.icon;
  const temp = weather.weather.formattedCurrentWeather.temp;
  const temp_min = weather.weather.formattedCurrentWeather.temp_min;
  const temp_max = weather.weather.formattedCurrentWeather.temp_max;
  const sunrise = weather.weather.formattedCurrentWeather.sunrise;
  const sunset = weather.weather.formattedCurrentWeather.sunset;
  const speed = weather.weather.formattedCurrentWeather.speed;
  const humidity = weather.weather.formattedCurrentWeather.humidity;
  const feels_like = weather.weather.formattedCurrentWeather.feels_like;

  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${(feels_like - 273.15).toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} km/h`,
    },
  ];
  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: `${sunrise}`,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: `${sunset}`,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${(temp_max - 273.15).toFixed()}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${(temp_min - 273.15).toFixed()}°`,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between py-3">
        <img src={icon} alt="weather icon" className="w-20" />
        <p className="text-5xl">{`${(temp - 273.15).toFixed()}°`}</p>

        <div className="flex flex-col space-y-3 items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm items-center justify-center"
            >
              <Icon size={18} className="mr-1" />
              {`${title}:`}{" "}
              <span className="font-medium ml-1">{`${value}`}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex flex-row items-center">
            <Icon size={30} />
            <p className="font-light ml-1">
              {`${title}: `}{" "}
              <span className="font-medium ml-1">{`${value}`}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
