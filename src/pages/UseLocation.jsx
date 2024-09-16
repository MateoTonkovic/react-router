import { useLocation } from "react-router-dom";

const UseLocationExample = () => {
  const location = useLocation();

  return <div>{JSON.stringify(location)}</div>;
};

export default UseLocationExample;
