import Clock from "./components/Clock";
import ToDo from "./components/ToDo";
import styled from "styled-components";

const BackGround = styled.div`
  position: absolute;
  background-color: rgba(199, 224, 253, 0.939);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

function App() {
  return (
    <BackGround>
      <Clock />
      <ToDo />
    </BackGround>
  );
}

export default App;
