import React, { useEffect, useState } from "react";
import timelineCSS from "../../styles/timeline.module.scss";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CircleIcon from "@mui/icons-material/Circle";

function timeline4() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [currYear, setCurrYear] = useState(0);
  const step = [
    {
      year: 2012,
      counter: count1,
    },
    {
      year: 2017,
      counter: count2,
    },
    {
      year: 2022,
      counter: count3,
    },
    {
      year: 2027,
      counter: count4,
    },
    {
      year: 2032,
      counter: count5,
    },
  ];

  const date = new Date();
  const year = date.getFullYear();
  let nearestIndex = 0;

  for (let i = 0; i < step.length; i++) {
    nearestIndex = i;
    if (step[i].year >= year) {
      break;
    }
  }
  nearestIndex = nearestIndex - 1;
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count1 <= 100) {
        setCount1((prevCount1) => prevCount1 + 1);
      } else if (count2 <= 100) {
        setCount2((prevCount2) => prevCount2 + 1);
      } else if (count3 <= 100) {
        setCount3((prevCount3) => prevCount3 + 1);
      } else if (count4 <= 100) {
        setCount4((prevCount4) => prevCount4 + 1);
      } else if (count5 <= 100) {
        setCount5((prevCount5) => prevCount5 + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 10);
    if (count1 === 100) {
      setCurrYear(currYear + 1);
    }
    if (count2 === 100) {
      setCurrYear(currYear + 1);
    }
    if (count3 === 100) {
      setCurrYear(currYear + 1);
    }
    if (count4 === 100) {
      setCurrYear(currYear + 1);
    }
    if (count5 === 100) {
      setCurrYear(currYear + 1);
    }
    if (nearestIndex === currYear) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [count1, count2, count3, count4]); // Add count1 to the dependency array to track changes in count1
  return (
    <>
      <div className={`${timelineCSS.timelineDiv}`}>
        {step.map((s, index) => (
          <div className={timelineCSS.timeline4}>
            <div
              className={`${
                index <= currYear
                  ? timelineCSS.iconDiv
                  : timelineCSS.normalIconDiv
              } ${index === step.length - 1 && timelineCSS.endTimelineICon} ${
                timelineCSS.defaultIconDiv
              }`}
            >
              <button
                className={`${index <= currYear && "primaryBtn"} ${
                  timelineCSS.yearBtn
                }`}
              >
                {s.year}
              </button>
              <CircleIcon
                className={`${
                  index <= currYear
                    ? timelineCSS.timelineIcon
                    : timelineCSS.normalIcon
                } `}
              />
            </div>

            {index !== step.length - 1 && (
              <meter
                id={timelineCSS.disc}
                value={s.counter}
                min="0"
                max="100"
                className={timelineCSS.meter}
              >
                {s.counter} out of 100
              </meter>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default timeline4;
