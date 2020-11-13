import { useContext } from "react";
import ValueContext from "./ValueContext";

function Child() {
    let value = useContext(ValueContext);
    let updateValue = value[1];
    return (
        <div >
            Child ValueContext value is {value[0]}
            <br />
            <button onClick={() => {
                updateValue(++value[0]);
            }}>Inc</button>

            <button onClick={() => {
                updateValue(--value[0]);
            }}>Dec</button>

        </div>
    );
}

export default Child;
