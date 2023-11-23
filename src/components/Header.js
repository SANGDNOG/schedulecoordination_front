import { Link } from "react-router-dom";
import styles from "styles/Header.module.css";
import logo from "icons/main_logo.png";
import AuthContext from "./AuthContext";
import React, { useContext } from "react";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null); // 로그아웃 시 사용자 정보를 제거합니다.
  };

  return (
    <header className={styles.main_header}>
      <h1 className={styles.logo}>
        <Link to="/" className={styles.tab}>
          <img className={styles.logo_image} src={logo} alt="타임튜닝 로고" />
        </Link>
      </h1>
      <ul className={styles.menu}>
        <Link to="/" className={styles.tab}>
          홈
        </Link>
        <Link to="/mySchedule/ing" className={styles.tab}>
          일정 관리
        </Link>
        <div className={styles.my_menu}>
          {user ? (
            <>
              <span className={`${styles.tab} ${styles.smallTab}`}>
                {user.name}님
              </span>
              <span className={`${styles.smallBar} ${styles.smallTab}`}>|</span>
              <button
                className={`${styles.tab} ${styles.smallTab}`}
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={`${styles.tab} ${styles.smallTab}`}>
                로그인
              </Link>
              <span className={`${styles.smallBar} ${styles.smallTab}`}>|</span>
              <Link to="/signup" className={`${styles.tab} ${styles.smallTab}`}>
                회원가입
              </Link>
            </>
          )}
        </div>
        {/* <a  href="/home">홈</a>
            <a className={styles.tab} href="/introduction">타임튜닝이란?</a>
            <a className={styles.tab} href="/schedule">일정 관리</a>
            <a className={`${styles.tab} ${styles.smallTab}`} href="/mypage">이아름님, 안녕하세요!</a> */}
      </ul>
    </header>
  );
};

export default Header;
