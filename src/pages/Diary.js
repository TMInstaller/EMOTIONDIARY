import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  // App.js에서 :id로 받아 온 값을 id에 저장
  console.log(id);
  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 상세 페이지 입니다.</p>
    </div>
  );
};

export default Diary;
