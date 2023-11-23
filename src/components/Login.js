import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoimg from "icons/main_logo.png";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/Login.module.css";
import AuthContext from "./AuthContext";

function Login(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isHide, setIsHide] = useState(true);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  let _eye = (
    <div
      className={styles.eye}
      onClick={() => {
        setIsHide(!isHide);
      }}
    >
      <FontAwesomeIcon icon={faEye} />
    </div>
  );

  if (isHide === false) {
    _eye = (
      <div
        className={styles.eyeSlash}
        onClick={() => {
          setIsHide(!isHide);
        }}
      >
        <FontAwesomeIcon icon={faEyeSlash} />
      </div>
    );
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        id: id,
        password: password,
      });

      if (response.status === 200) {
        console.log("로그인 성공");
        setUser({ name: id });
        navigate("/"); // 로그인 성공 시 메인 페이지로 이동
      } else {
        console.log("로그인 실패");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("아이디 혹은 비밀번호가 잘못되었습니다."); // 경고창 띄우기
      }
      console.error("로그인 요청 중에 오류가 발생했습니다.", error);
    }
  };

  return (
    <div className={styles.login}>
      <img className={styles.logo} src={logoimg} alt="img" />
      <div className={styles.box}>
        <span className={`${styles.title} ${styles.id}`}>아이디</span>
        <form className={styles.form} onSubmit={handleLogin}>
          <input
            className={styles.input}
            type="text"
            name="id"
            placeholder="아이디를 입력하세요"
            spellCheck="false"
            onChange={(e) => setId(e.target.value)}
          />
          <span className={`${styles.title} ${styles.pw}`}>비밀번호</span>
          <input
            className={styles.input}
            type={isHide ? "password" : "text"}
            name="pw"
            placeholder="비밀번호를 입력하세요"
            spellCheck="false"
            onChange={(e) => setPassword(e.target.value)}
          />
          {_eye}
          <button className={styles.btn_login} type="submit">
            로그인
          </button>
        </form>
      </div>
      <div className={styles.textdiv}>
        <span className={styles.text}>아이디/비밀번호를 잊으셨나요?</span>
        <span className={styles.text}> | </span>
        <Link to="/signup" className={styles.text}>
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default Login;
