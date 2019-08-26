const checkTime = () => {
  let time = document.querySelector("#meeting").value;
  time = time.split(":");
  time = time[0] * 3600 + time[1] * 60;

  let arrive = document.querySelector("#arrive").value;
  arrive = arrive.split(":");
  arrive = arrive[0] * 3600 + arrive[1] * 60;

  return arrive - time;
};

const calculation = () => {
  let diff = checkTime();
  let hour = 0;
  let minute = 0;
  let fine = 0;
  const cost = document.querySelector("#fine");

  if (diff <= 0) {
    console.log("เพื่อนมาทัน");
  } else {
    while (diff >= 3600) {
      hour += 1;
      diff -= 3600;
    }

    while (diff >= 60) {
      minute += 1;
      diff -= 60;
    }

    console.log("เพื่อนมาสาย " + hour + " ชั่วโมง " + minute + " นาที");

    if (minute <= 30 && hour == 0) {
      fine += minute;
    } else {
      minute = 0;
      hour += 1;
      fine = hour * 100;
    }

    document.querySelector("#fine").innerHTML = fine + " บาท";

    console.log("ต้องจ่ายค่าปรับ", fine);
  }
};
