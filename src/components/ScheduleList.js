import React, { useEffect, useState } from "react";
import axios from "axios";
import ScheduleBlock from "./ScheduleBlock";

function ScheduleList() {
  const [schedules, setSchedules] = useState([]); // 일정 데이터를 저장할 상태

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get("http://localhost:8080/schedules");

        if (response.status === 200) {
          setSchedules(response.data.schedules);
        } else {
          console.log("일정 불러오기 실패");
        }
      } catch (error) {
        console.error("일정 불러오기 요청 중에 오류가 발생했습니다.", error);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <div>
      {schedules.map((schedule) => (
        <ScheduleBlock key={schedule._id} schedule={schedule} />
      ))}
    </div>
  );
}

export default ScheduleList;
