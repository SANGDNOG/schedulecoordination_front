import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "styles/SignUp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// import bcrypt from "bcryptjs";

function SignUp(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const history = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      // const hashedPassword = await bcrypt.hash(password, 10); // 비밀번호 해싱

      const response = await axios.post("http://localhost:8080/signup", {
        id: id,
        name: name,
        password: password,
      });

      if (response.status === 200) {
        // 회원 가입 성공
        // 상태 업데이트 또는 리디렉션 등 필요한 작업 수행
        console.log("success");
        history("/login"); // 회원 가입 성공 후 로그인 페이지로 이동
      } else {
        // 회원 가입 실패
        // 에러 메시지 표시 등 필요한 작업 수행
        console.log("fail");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("이미 존재하는 아이디입니다."); // 경고창 띄우기
      }
      console.error("회원 가입 요청 중에 오류가 발생했습니다.", error);
    }
  };

  let _btn = (
    <button className={styles.btn_notCompleted} type="button">
      가입 완료
    </button>
  );

  const completedBtn = (
    <Link to="/login" className={styles.tab}>
      <button
        className={styles.btn_completed}
        type="button"
        onClick={handleSignUp}
      >
        가입 완료
      </button>
    </Link>
  );

  if (id !== "" && name !== "" && password !== "" && pwCheck !== "") {
    _btn = completedBtn;
  }

  const [isHide, setIsHide] = useState(true);
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

  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const onChangeDisplay = (index) => {
    let newArray = [...isVisible];
    for (let i = 0; i < 4; i++) {
      if (i === index) {
        newArray[i] = true;
      } else {
        newArray[i] = false;
      }
    }
    setIsVisible(newArray);
  };

  let pwCheckReport = "";
  if (password !== pwCheck) {
    pwCheckReport = "두 비밀번호가 달라요!";
  }

  return (
    <div className={styles.signUp}>
      <div className={styles.title}>
        <span>
          일정 조율, <b>내일 뭐해</b>로 시작해보세요!
        </span>
      </div>
      <div className={styles.box}>
        <div className={styles.forms}>
          <div className={styles.section}>
            <div className={styles.texts}>
              <span className={styles.text_title}>아이디</span>
            </div>
            <input
              className={styles.inputs}
              type="text"
              placeholder="아이디를 입력하세요"
              spellCheck="false"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </div>
          <div className={styles.section}>
            <div className={styles.texts}>
              <span className={styles.text_title}>이름</span>
            </div>
            <input
              className={styles.inputs}
              type="text"
              placeholder="본인의 성함을 입력하세요"
              spellCheck="false"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className={styles.section}>
            <div className={styles.texts}>
              <span className={styles.text_title}>비밀번호</span>
            </div>
            <div className={styles.pw_inputs}>
              <input
                className={styles.inputs}
                type={isHide ? "password" : "text"}
                placeholder="비밀번호를 입력하세요"
                spellCheck="false"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {_eye}
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.texts}>
              <span className={styles.text_title}>비밀번호 확인</span>
              <span
                className={styles.text_report}
                style={{ display: isVisible[3] ? "inline" : "none" }}
              >
                {pwCheckReport}
              </span>
            </div>
            <div className={styles.pw_inputs}>
              <input
                className={styles.inputs}
                type={isHide ? "password" : "text"}
                placeholder="비밀번호를 다시 입력하세요"
                spellCheck="false"
                onChange={(e) => {
                  setPwCheck(e.target.value);
                }}
                onClick={() => {
                  onChangeDisplay(3);
                }}
              />
              {_eye}
            </div>
          </div>
        </div>
        <div className={styles.btns}>{_btn}</div>
      </div>
    </div>
  );
}

export default SignUp;
