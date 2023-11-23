import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import ko from "date-fns/locale/ko";
import moment from "moment";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import ColorPicker from "components/ColorPicker";
import styles from "styles/AddSchedule.module.css";
import axios from "axios";

function AddSchedule(props) {
  const [myTitle, setMyTitle] = useState("");
  const [myDesc, setMyDesc] = useState("");
  const [myColor, setMyColor] = useState("#99C0F6");

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // console.log(dateRange);

  const handleAddSchedule = async () => {
    try {
      const response = await axios.post("http://localhost:8080/schedules", {
        title: myTitle,
        description: myDesc,
        color: myColor,
        startDate: dateRange[0].startDate,
        endDate: dateRange[0].endDate,
      });

      if (response.status === 200) {
        console.log("일정 추가 성공");
        props.onAddSch(myTitle, myDesc, myColor, dateRange);
        navigate(-1);
      } else {
        console.log("일정 추가 실패");
      }
    } catch (error) {
      console.error("일정 추가 요청 중에 오류가 발생했습니다.", error);
    }
  };

  const today = moment().toDate();

  const navigate = useNavigate();

  return (
    <div className={styles.addSchedule}>
      <div className={styles.box}>
        <div className={styles.infos}>
          <div className={styles.title}>
            <input
              className={styles.inputs}
              type="text"
              placeholder="일정 제목"
              spellCheck="false"
              onChange={(e) => {
                setMyTitle(e.target.value);
              }}
            />
          </div>
          <div className={styles.desc}>
            <span>일정 설명</span>
            <input
              type="text"
              spellCheck="false"
              onChange={(e) => {
                setMyDesc(e.target.value);
              }}
            />
          </div>
          <div className={styles.color}>
            <span>색상 선택</span>
            <ColorPicker
              myColor={myColor}
              onChangeColor={function (color) {
                setMyColor(color);
                // console.log(myColor);
              }}
            />
          </div>
          <div className={styles.date}>
            <span className={styles.date_text}>날짜 선택</span>
            <div className={styles.date_calendar}>
              <DateRange
                locale={ko}
                editableDateInputs={false}
                minDate={today}
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={dateRange}
                rangeColors={["#4B77F2"]}
                direction="horizontal"
                dateDisplayFormat={"yyyy년 MM월 dd일"}
              />
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <button
            className={styles.btn_ok}
            type="submit"
            // onClick={() => {
            //   props.onAddSch(myTitle, myDesc, myColor, dateRange);
            //   navigate(-1);
            //   // props.history.goBack();
            // }}
            onClick={handleAddSchedule}
          >
            확인
          </button>
          <button
            className={styles.btn_cancel}
            type="button"
            onClick={(e) => {
              navigate(-1);
              // props.history.goBack();
              // props.onChangeScheduleMode('ing');
              // props.onChangeModeState('조율 진행중');
              // console.log(range);
            }}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSchedule;
