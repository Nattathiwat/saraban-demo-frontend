
const months = [ 'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.',]; 
const months_Long = [ "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม", ];


export default {
  currentDate() {
    let d = new Date();
    let month = d.getMonth()+1;
    let day = d.getDate();
    let output = (day<10 ? '0' : '') + day + '/' + (month<10 ? '0' : '') + month + '/' + (d.getFullYear() + 543);
    return output
  },
  currentTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let output = (h<10 ? '0' : '') + h + ':' + (m<10 ? '0' : '') + m;
    return output
  },
  convertLongMonth(data) {
    if (data.split('/').length > 2) {
      return data.split('/')[0] + ' ' + months_Long[parseInt(data.split('/')[1])-1] + ' ' + data.split('/')[2]
    } else {
      return ''
    }
  },
  commaNumber(data) {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  year543(data) {
    return data ? data.split('/')[0]+'/'+data.split('/')[1]+'/'+(data.split('/')[2]-543) : ''
  },
  yearPlus543(data) {
    return data ? data.split('/')[0]+'/'+data.split('/')[1]+'/'+(+(data.split('/')[2])+543) : ''
  },
  covertDateByMonthThBbRev(monthThBbRev) {
    let result = '';
    if (monthThBbRev) {
      if (monthThBbRev.split(' ').length > 3) {
        let dateArr = monthThBbRev.split(' ');
        let month = months.indexOf(dateArr[1]) + 1;
        result = `${dateArr[0]}/${month > 9 ? month : '0' + month}/${dateArr[2]} ${dateArr[3]} ${dateArr[4]}`;
      } else {
        let dateArr = monthThBbRev.split(' ');
        let month = months.indexOf(dateArr[1]) + 1;
        result = `${dateArr[0]}/${month > 9 ? month : '0' + month}/${dateArr[2]}`;
      }
    } else {
      result = '';
    }
    return result;
  },
  covertDateByMonthTh(monthThBbRev) {
    let result = '';
    if (monthThBbRev) {
      if (monthThBbRev.split(' ').length > 3) {
        let dateArr = monthThBbRev.split(' ');
        let month = months_Long.indexOf(dateArr[1]) + 1;
        result = `${dateArr[0]}/${month > 9 ? month : '0' + month}/${dateArr[2]} ${dateArr[3]} ${dateArr[4]}`;
      } else {
        let dateArr = monthThBbRev.split(' ');
        let month = months_Long.indexOf(dateArr[1]) + 1;
        result = `${dateArr[0]}/${month > 9 ? month : '0' + month}/${dateArr[2]}`;
      }
    } else {
      result = '';
    }
    return result;
  },
  longDateToShort(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() + 543;
    return `${day > 9 ? day : '0' + day}/${month > 9 ? month : '0' + month}/${year}`;
  },
  formatNewDate(data) {
    if(data) {
      if (data.split(' ').length > 1) {
        let newDate = data.split(' ')[0]
        let newTime = data.split(' ')[1]
        return new Date(+newDate.split("/")[2] - 543, newDate.split("/")[1] - 1, newDate.split("/")[0], newTime.split(":")[0], newTime.split(":")[1])
      } else {
        return new Date(+data.split("/")[2] - 543, data.split("/")[1] - 1, data.split("/")[0])
      }
    } else {
      return ''
    }
  }
}