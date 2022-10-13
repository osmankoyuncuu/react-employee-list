import "./Person.scss";
import data from "../../helper/data";

const person = (props) => {
  return data.slice(props.count, props.count + 5).map((item) => {
    const { id, name, email, image, age } = item;
    return (
      <div className="card" key={id}>
        <img src={image} alt="" />
        <div>
          <h4>{name}</h4>
          <p>{email}</p>
          <p>{age} years</p>
        </div>
      </div>
    );
  });
};

export default person;
