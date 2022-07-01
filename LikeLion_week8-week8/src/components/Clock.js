import styled from "styled-components";
import { useEffect, useState } from "react";

const ClockBox = styled.div`
  text-align: center;
  font-size: 17px;
`;

const DateText = styled.h3`
  color: rgb(99, 146, 253);
  text-shadow: 1px 1px 0 rgba(255, 253, 253, 0.913),
    1.5px 1.5px 0 rgba(102, 147, 252, 0.759);

  &:hover {
    color: rgb(77, 128, 247);
    font-style: italic;
  }
`;

const TimeText = styled.h3`
  color: rgb(99, 146, 253);
  margin-top: 0;
  text-shadow: 1px 1px 0 rgba(255, 253, 253, 0.913),
    1.5px 1.5px 0 rgba(102, 147, 252, 0.759);
  &:hover {
    color: rgb(77, 128, 247);
    font-style: italic;
  }
`;

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <ClockBox>
      <DateText>Today is {time.toLocaleDateString()}</DateText>
      <TimeText>{time.toLocaleTimeString()}</TimeText>
    </ClockBox>
  );
}

export default Clock;
