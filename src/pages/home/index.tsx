import { useEffect, useState } from "react";
import { getData } from "src/api";
import useRequest from "src/hooks/useRequest";
const Home = () => {
  const [status, setStatus] = useState<boolean>(true);

  const { data } = useRequest<any>(getData, { manual: false });

  return <div className="App" id="#content"></div>;
};

export default Home;
