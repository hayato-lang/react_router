import { useLocation, useParams } from "react-router-dom";

export const UrlParamater = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParamaterです。</h1>
      <p>パラメーターは{id}です</p>
      <p>Query Paramaterは{query.get("name")}です。</p>
    </div>
  );
};
