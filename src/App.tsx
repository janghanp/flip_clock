import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hour, setHour] = useState<string>();
  const [min, setMin] = useState<string>();
  const [second, setSecond] = useState<string>();

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const currentTime = new Date();

      const hour = currentTime.getHours();
      const min = currentTime.getMinutes();
      const second = currentTime.getSeconds();

      let formattedHour;
      let formattedMin;
      let formattedSecond;

      if (hour < 10) {
        formattedHour = "0" + hour.toString();
      } else {
        formattedHour = hour.toString();
      }

      if (min < 10) {
        formattedMin = "0" + min.toString();
      } else {
        formattedMin = min.toString();
      }

      if (second < 10) {
        formattedSecond = "0" + second.toString();
      } else {
        formattedSecond = second.toString();
      }

      setHour((prevState) => {
        if (prevState && formattedHour) {
          const classList0 = document.getElementById("hour0")?.classList;
          const classList1 = document.getElementById("hour1")?.classList;

          if (prevState[0] !== formattedHour[0]) {
            classList0?.add("flip");
          } else {
            classList0?.remove("flip");
          }

          if (prevState[1] !== formattedHour[1]) {
            classList1?.add("flip");
          } else {
            classList1?.remove("flip");
          }
        }

        return formattedHour;
      });

      setMin((prevState) => {
        if (prevState && formattedMin) {
          const classList0 = document.getElementById("min0")?.classList;
          const classList1 = document.getElementById("min1")?.classList;

          if (prevState[0] !== formattedMin[0]) {
            classList0?.add("flip");
          } else {
            classList0?.remove("flip");
          }

          if (prevState[1] !== formattedMin[1]) {
            classList1?.add("flip");
          } else {
            classList1?.remove("flip");
          }
        }

        return formattedMin;
      });

      setSecond((prevState) => {
        if (prevState && formattedSecond) {
          const classList0 = document.getElementById("second0")?.classList;
          const classList1 = document.getElementById("second1")?.classList;

          if (prevState[0] !== formattedSecond[0]) {
            classList0?.add("flip");
          } else {
            classList0?.remove("flip");
          }

          if (prevState[1] !== formattedSecond[1]) {
            classList1?.add("flip");
          } else {
            classList1?.remove("flip");
          }
        }

        return formattedSecond;
      });

      setIsLoading(prevState => prevState && !prevState);
    }, 500);


    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <div className="container">
      <div className="title">
        Flip clock
      </div>
      <div className="clock">
        <div className="hour">
          <div className="number_wrapper">
            <div className="next">
              <div className="number1">{hour?.[0]}</div>
            </div>
            <div className="up" id="hour0">
              <div className="number1">{hour?.[0]}</div>
            </div>
            <div className="down">
              <div className="number2">{hour?.[0]}</div>
            </div>
          </div>

          <div className="number_wrapper">
            <div className="next">
              <div className="number1">{hour?.[1]}</div>
            </div>
            <div className="up" id="hour1">
              <div className="number1">{hour?.[1]}</div>
            </div>
            <div className="down">
              <div className="number2">{hour?.[1]}</div>
            </div>
          </div>
        </div>

        <div>:</div>

        <div className="min">
          <div className="number_wrapper">
            <div className="next">
              <div className="number1">{min?.[0]}</div>
            </div>
            <div className="up" id="min0">
              <div className="number1">{min?.[0]}</div>
            </div>
            <div className="down">
              <div className="number2">{min?.[0]}</div>
            </div>
          </div>

          <div className="number_wrapper">
            <div className="next">
              <div className="number1">{min?.[1]}</div>
            </div>
            <div className="up" id="min1">
              <div className="number1">{min?.[1]}</div>
            </div>
            <div className="down">
              <div className="number2">{min?.[1]}</div>
            </div>
          </div>
        </div>

        <div>:</div>

        <div className="second">
          <div className="number_wrapper">
            <div className="next">
              <div className="number1">{second?.[0]}</div>
            </div>
            <div className="up" id="second0">
              <div className="number1">{second?.[0]}</div>
            </div>
            <div className="down">
              <div className="number2">{second?.[0]}</div>
            </div>
          </div>
          <div className="number_wrapper">
            <div className="next">
              <div className="number1">{second?.[1]}</div>
            </div>
            <div className="up" id="second1">
              <div className="number1">{second?.[1]}</div>
            </div>
            <div className="down">
              <div className="number2">{second?.[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
