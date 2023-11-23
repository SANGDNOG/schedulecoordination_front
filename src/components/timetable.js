import React, { useState } from "react";

const ButtonComponent = () => {
  const [isSelected, setIsSelected] = useState(false); // 클릭 상태를 저장하는 상태 변수

  const handleClick = () => {
    setIsSelected(!isSelected); // 버튼 클릭 시, 클릭 상태를 반전
  };

  return (
    <button
      className={isSelected ? "selectedSlot" : "slot"}
      onClick={handleClick}
    >
      Click me
    </button>
  );
};

export default ButtonComponent;
