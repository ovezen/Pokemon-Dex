import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStartDex = () => {
    navigate("/dex"); // /dex 페이지로 이동
  };

  return (
    <div>
      <h1>포켓몬 도감</h1>
      <button onClick={handleStartDex}>포켓몬 도감 시작하기</button>
    </div>
  );
};

export default Home;
