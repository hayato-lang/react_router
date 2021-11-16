import { useParams, useRocation } from "react-router-dom";

export const UrlParamater = () => {
  const { id } = useParams();
  const { search } = useRocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParamaterです。</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリパラメーターは{query}です</p>
    </div>
  );
};
