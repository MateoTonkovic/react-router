import { useParams } from "react-router-dom";

const UseParamsExample = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default UseParamsExample;
