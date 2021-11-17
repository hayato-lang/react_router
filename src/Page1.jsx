import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const history = useHistory();
  const arr = [...Array(100).keys()];
  const onClickDetailA = () => history.push("/Page1/DetailA");
  return (
    <div>
      <h1>Page1です</h1>
      <Link to={{ pathname: "/Page1/DetailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/Page1/DetailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
