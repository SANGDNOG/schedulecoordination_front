import styles from "styles/Home.module.css";
import page1 from "icons/page1.png";
import twopage from "icons/2page.png";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home(props) {
  const StyledSlider = styled(Slider)`
    .slick-list {
      // position: relative;
      // right: 455px;
      width: 100%;
      margin: 0 auto;
      height: auto;
    }

    .slick-dots {
      bottom: 20px;
    }

    .slick-dots button:before,
    .slick-dots li button:before {
      color: #4b77f2;
    }

    .slick-prev::before,
    .slick-next::before {
      opacity: 0;
      display: none;
    }
  `;

  const setting = {
    dots: true,
    infinite: true,
    fade: true,
    // autoplay: true,
    prevArrow: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <StyledSlider {...setting}>
        {/* 1page */}
        <div className={styles.maindiv}>
          <div className={styles.main_logo}>
            <img className={styles.main_logo_img} src={page1} />
          </div>
        </div>
        {/* 2page */}
        <div className={styles.two}>
          <img className={styles.twomain} src={twopage} alt="img1" />
        </div>
        {/* 3page */}
        {/* <div>
          <div>
            <img className={styles.logocircle3} src={Frametop} alt="img1" />
          </div>
          <img className={styles.threemain} src={threepage} alt="img1" />
          <div className={styles.logoimgdiv}>
            <img className={styles.logoimg} src={logoimg} alt="img1" />
          </div>
        </div> */}
        {/* 4page */}
        {/* <div>
          <div className={styles.logoimgdiv}>
            <img className={styles.logo} src={logo} alt="img1" />
          </div>
          <img className={styles.fourmain} src={fourpage} alt="img1" />
          <div>
            <img className={styles.logocircle4} src={Frametop} alt="img1" />
          </div>
        </div> */}
      </StyledSlider>
    </div>

    // <div>
    //     <div>
    //         <img className={styles.logoFrame} src={logoFrame} alt='img1'/>
    //     </div>
    //     <div className={styles.text}>
    //         <span>
    //             <b>여러 사람들과 일정 조율</b>을 위해<br></br>
    //             에너지를 소모해보는 경험, 있지 않으신가요?
    //         </span>
    //     </div>
    //     <div className={styles.clockbox}>
    //         <img className={styles.box} src={box} alt='img2'/>
    //         <div className={styles.clock}>
    //             <img src={circle} alt='img3'/>
    //             <img className={styles.circlehandle} src={clockhandle} alt='img4'/>
    //         </div>
    //         <div>
    //             <span className={styles.timesaving}>
    //                 <b>시간 절약</b><br></br>
    //             </span>
    //             <span className={styles.timesaving2}>
    //                 <b>일정조율에 낭비되는 시간,<br></br>
    //                 타임튜닝이 줄여볼게요</b>
    //             </span>
    //         </div>
    //     </div>
    //     <div className={styles.clockbox}>
    //         <img className={styles.box} src={box} alt='img2'/>
    //         <div className={styles.clock}>
    //             <img src={circle} alt='img3'/>
    //             <img className={styles.circlehandle} src={clockhandle} alt='img4'/>
    //         </div>
    //         <div>
    //             <span className={styles.timesaving}>
    //                 <b>시간 절약</b><br></br>
    //             </span>
    //             <span className={styles.timesaving2}>
    //                 <b>일정조율에 낭비되는 시간,<br></br>
    //                 타임튜닝이 줄여볼게요</b>
    //             </span>
    //         </div>
    //     </div>
    // </div>

    //2page

    //3page
  );
}

export default Home;
