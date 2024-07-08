import {useState} from "react"; /* 컴퍼넌트에서 스테이트를 사용하려면 useState 함수를 불러온다. */
import Dice from './Dice';
import Button from "./Button";

function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    const [num, setNum] = useState(1);
    /* 스테이터와 세터를 배열 형태로 리턴하기 때문에 Destructuring 문법을 작성한다.
    * state를 변경할 때는 직접 값을 변경하지 않고 반드시 setter함수를 통해 변경한다. */

    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
    };
    const handleClearClick = () => {
        setNum(1);
    }

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <Dice color="red" num={num}/>
        </div>
    );
}

export default App;