import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // userSearchParams()의 경우 반드시 지켜야 하는 부분, 앞부분은 자유로이 설정해도 괜찮다
  const id = searchParams.get("id");

  const mode = searchParams.get("mode");

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: "bdy" })}>button</button>
      <button onClick={() => navigate("/home")}>Go Home</button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
