import { useParams } from "react-router-dom";

export const UrlParamater = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParamaterです。</h1>
      <p>パラメーターは{id}です</p>
    </div>
  );
};
