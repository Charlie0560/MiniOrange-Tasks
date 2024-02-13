import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import timelineCSS from "../../styles/timeline.module.scss";

const steps = ["2012", "2017", "2022", "2027"];

export default function timeline2() {
  const [active, setActive] = useState(true);
  const date = new Date();
  const year = date.getFullYear();

  let nearestYear = steps[0];
  let nearestDifference = Math.abs(year - parseInt(steps[0]));
  let nearestIndex = 0;

  for (let i = 1; i < steps.length; i++) {
    const difference = Math.abs(year - parseInt(steps[i]));

    if (difference < nearestDifference) {
      nearestYear = steps[i];
      nearestDifference = difference;
      nearestIndex = i;
    }
  }

  const line = useAnimation();
  const line1 = useAnimation();
  const line2 = useAnimation();
  const line3 = useAnimation();
  const secondCircle = useAnimation();
  const thirdCircle = useAnimation();
  const fourthCircle = useAnimation();
  const fifthCircle = useAnimation();

  useEffect(() => {
    let counter = 0;
    if (active) {
      const sequence = async () => {
        await line.start("start");
        await secondCircle.start("start");
        counter++;
        if (counter === nearestIndex) {
          return;
        }
        await line1.start("start");
        await thirdCircle.start("start");
        counter++;
        if (counter === nearestIndex) {
          return;
        }
        await line2.start("start");
        await fourthCircle.start("start");
        counter++;
        if (counter === nearestIndex) {
          return;
        }
        await line3.start("start");
        await fifthCircle.start("start");
        counter++;
        if (counter === nearestIndex) {
          return;
        }
      };
      sequence();
    }
  }, [active]);

  return (
    <div className="timeline2 container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Circle alreadyFinish={true} year="2012" />
        <Line controls={line} />
        <Circle controls={secondCircle} year="2017" />
        <Line controls={line1} />
        <Circle controls={thirdCircle} year="2022" />
        <Line controls={line2} />
        <Circle controls={fourthCircle} year="2027" />
        <Line controls={line3} />
        <Circle controls={fifthCircle} year="2032" />
      </div>
    </div>
  );
}

const Line = ({ controls }) => {
  const variants = {
    start: {
      width: "200px",
      backgroundColor: "#C3002F",
      transition: { duration: 1 },
    },
    initial: { width: 0 },
  };

  return (
    <div className={timelineCSS.progressLine}>
      <motion.div
        style={{ height: "3px" }}
        initial={"initial"}
        variants={variants}
        animate={controls}
      ></motion.div>
    </div>
  );
};

const Circle = ({ controls, alreadyFinish, year }) => {
  const style = {
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    border: "1px solid",
  };

  const variants = {
    start: {
      backgroundColor: "#C3002F",
      transition: { duration: alreadyFinish ? 0 : 2 },
    },
    initial: alreadyFinish ? false : { backgroundColor: "#ccc" },
  };

  return (
    <div className={timelineCSS.motionCircle}>
      <motion.div
        initial={"initial"}
        variants={variants}
        animate={alreadyFinish ? "start" : controls}
        // style={style}
        className={timelineCSS.progressCircle}
      />
      {year}
    </div>
  );
};
