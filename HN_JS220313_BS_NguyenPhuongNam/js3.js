let conTinue;
do {
  let month = +prompt("Vui lòng nhập THÁNG - MONTH để check số ngày");
  let year = +prompt("Vui lòng nhập NĂM - YEAR để check số ngày");
  let day;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = 30;
      break;
    case 2:
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        day = 29;
      } else {
        day = 28;
      }
      break;
    default:
      alert(
        "Tháng bạn nhập không hợp lệ !! Vui lòng nhập số tháng từ ( 1 ~ 12 )"
      );
      break;
  }
  alert(`Số ngày trong tháng ${month} năm ${year} là ${day} ngày`);
  conTinue = confirm("Bạn có muốn tiếp tục không?");
} while (conTinue);
