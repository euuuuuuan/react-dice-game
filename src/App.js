import {useState} from "react"; /* 컴퍼넌트에서 스테이트를 사용하려면 useState 함수를 불러온다. */
import Dice from './Dice';
import Button from "./Button";

function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);
    /* 스테이터와 세터를 배열 형태로 리턴하기 때문에 Destructuring 문법을 작성한다.
    * state를 변경할 때는 직접 값을 변경하지 않고 반드시 setter함수를 통해 변경한다. */

    const handleRollClick = () => {
        const nextNum = random(6);
        /* 배열은 기본형이 아니라 참조형이다. gameHistory 변수는 기록들을 가진 배열 자체를 값으로 갖지 않고
        * 그 배열을 가리키는 주소값을 갖고 있다.*/
        setNum(nextNum);
        setSum(sum + nextNum);   // setNum과 setSum 부분을 주석처리 하면 아래의 기록용 코드도 작동하지 않는다.
        // gameHistory.push(nextNum);  // gameHistory가 배열이니까 push 메소드로 nextNum 추가
        // setGameHistory(gameHistory);
        setGameHistory([...gameHistory, nextNum]); // 위의 문제점을 해결하기 위해 Spread 문법을 사용한다.
        /* 배열이나 객체 같은 참조형 State를 사용할 때는 메소드나 할당 연산자로 값을 바꾸지 않고 반드시 새로운 값을 만들어서 변경한다. */
    };
    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);  // 빈 배열 추가
    }

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <h2>나</h2>
                <Dice color="blue" num={num}/>
                <h2>총점</h2>
                <p>{sum}</p>
                <h2>기록</h2>
                <p>{gameHistory.join(', ')}</p>
            </div>
        </div>
    );
}

export default App;