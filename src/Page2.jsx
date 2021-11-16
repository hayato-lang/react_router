import { Link } from "react-router-dom"; // import { UseParams } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2です</h1>
      <Link to="/Page2/888">UrlParamater</Link>
      <br />
      <Link to="/Page2/name=hogehoge">Query Paramater</Link>
    </div>
  );
};
