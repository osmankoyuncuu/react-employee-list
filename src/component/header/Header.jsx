import "./Header.scss";
const Header = (props) => {
  return (
    <div>
      <h1>Employee List</h1>
      <h4 className="page-number">
        (Employees {props.count + 1} to {props.count + 5})
      </h4>
    </div>
  );
};

export default Header;
