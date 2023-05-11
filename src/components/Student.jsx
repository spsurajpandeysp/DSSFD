import propTypes from "prop-types";
import Comp from "./Comp";


const Student = (game) => {
    return (
        <div>
            <h1>{game.name} Student</h1>
            <h1>{game.age} Student age</h1>
            <Comp name={game.name}/>
        </div>
    )
}

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}

Student.defaultProps={
    name: "Pandey ji",
    age: 32
}
export default Student;