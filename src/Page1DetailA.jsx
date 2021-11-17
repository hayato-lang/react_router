import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  const history = useHistory();
  const onClickPage1 = () => history.goBack();
  console.log(state);
  return (
    <div>
      <h1>Page1DetailAです</h1>
      <br />
      <button onClick={onClickPage1}>戻る</button>
    </div>
  );
};
