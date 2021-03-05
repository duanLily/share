const date = {

  /**
   * 获取两个日期之间的天数
   * @param date1 日期值
   * @param date2 日期值
   */
  getDay: (date1, date2) => {
    var datetime1 = Date.parse(date1);    //返回1970到现在指定日期的秒数
    var datetime2 = Date.parse(date2);    //返回1970到现在指定日期的秒数
    if (datetime1 == '' || datetime2 == '') return;
    if (datetime1 == datetime2) return 0;
    var c = datetime1 > datetime2 ? datetime1 - datetime2 : datetime2 - datetime1;
    var s = c / 1000;
    var m = s / 60;
    var h = m / 60;
    var day = h / 24;
    return Number(day);
  },
  /**
   * 获取最近X个月
   * @param total 一年传12
   * @param hasToday 是否包含当天日期 默认包含
   */
  getDate: (total = 1, hasToday) => {
    let startTime = new Date();
    let currYear = new Date().getFullYear();
    let currMonth = new Date().getMonth() + 1;
    let currDay = new Date().getDate();
    let currTime = this.format(new Date(currYear, currMonth - 1, currDay - 1), 'yyyy-MM-dd');
    if (!hasToday && currDay == 1) { //不包含当天处理每月1号
      currMonth = currMonth - 1;
      currTime = this.format(new Date(currYear, currMonth - 1, 0), 'yyyy-MM-dd');
    }
    let diff = currMonth - total;
    let remainder = diff % 12;
    if (diff < 0) {
      let diffYear = diff < -12 ? parseInt(diff / 12) : -1;
      const startMonth = 12 + remainder;
      startTime.setFullYear(currYear + diffYear);
      !hasToday && currDay == 1 ? startTime.setMonth(startMonth - 1) : startTime.setMonth(startMonth);
    } else {
      !hasToday && currDay == 1 ? startTime.setMonth(diff - 1) : startTime.setMonth(diff);
    }
    startTime.setDate(1);
    startTime = this.format(startTime, 'yyyy-MM-dd');
    let dateValue = [startTime, currTime];
    return dateValue;
  },
  /**
   * 获取本周第一天  返回 标准时间
   */
  getFirstDayOfWeek: function () {
    let now = new Date();
    let weekDay = now.getDay() || 7; //获取星期几,getDay()返回值是 0（周日） 到 6（周六） 之间的一个整数。0||7为7，即weekday的值为1-7
    now.setDate(now.getDate() - weekDay + 1);//往前算（weekday-1）天，年份、月份会自动变化
    return now;
  },
  /**
   * 获取本月第一天  返回 标准时间
   */
  getFirstDayOfMonth: function () {
    var now = new Date();
    now.setDate(1);
    return now;
  },
  /**
   * 获取本季度第一天  返回 标准时间
   */
  getFirstDayOfQuarter: function () {
    var now = new Date();
    var month = now.getMonth();
    if (month < 3) {
      now.setMonth(0);
    } else if (2 < month && month < 6) {
      now.setMonth(3);
    } else if (5 < month && month < 9) {
      now.setMonth(6);
    } else if (8 < month && month < 11) {
      now.setMonth(9);
    }
    now.setDate(1);
    return now;
  },
  /**
   * 日期格式化为数字串 '202101021257'
   * @param date 日期值
   */
  formatNum: function (date, pattern) {
    if (!date) {
      return '';
    }
    const dateNew = new Date(date);
    const y = dateNew.getFullYear();
    const m = dateNew.getMonth() + 1;
    const d = dateNew.getDate();
    const h = dateNew.getHours();
    const f = dateNew.getMinutes();
    // const mm = dateNew.getSeconds();
    return y + (m < 10 ? '0' + m : m) + (d < 10 ? '0' + d : d) + (h < 10 ? '0' + h : h) + (f < 10 ? '0' + f : f)
  },
  /**
   * 日期格式化为字符串
   * @param date 日期值
   * @param pattern 格式类型，为“yyyy-MM-dd HH:mm:ss.S”子串
   */
  format: function (date, pattern) {
    if (!date) {
      return '';
    }
    if (pattern == 'dd-MM') {	// 英文状态下仅有“日-月”时进行特殊处理，以免容易混淆，modified by caiys/20191218
      let dateStr = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'][date.getMonth()];
      let day = date.getDate();
      day = day < 10 ? '0' + day : day;
      dateStr = dateStr + day;
      return dateStr;
    }
    let o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "H+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      //"q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(pattern)) pattern = pattern.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
      if (new RegExp("(" + k + ")").test(pattern)) pattern = pattern.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return pattern;
  },
  /**
   * 日期字符串转为日期对象
   * @param date 日期字符串值
   * @param pattern 格式类型，为“yyyy-MM-dd HH:mm:ss.S”子串
   */
  parse: function (dateStr, pattern) {
    if (!dateStr) {
      return null;
    }
    let date = new Date();
    let o = {
      "y+": date.getFullYear(),
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "H+": 0,
      "m+": 0,
      "s+": 0,
      "S": 0
    };
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(pattern)) {
        const index = pattern.indexOf(RegExp.$1);
        if (RegExp.$1.length == 1) {
          let tmpStr = dateStr.substr(index);
          o[k] = parseInt(tmpStr);
        } else {
          let tmpStr = dateStr.substr(index, RegExp.$1.length);
          o[k] = parseInt(tmpStr);
        }
      }
    }
    date = new Date(o["y+"], o["M+"] - 1, o["d+"], o["H+"], o["m+"], o["s+"], o["S"]);
    return date;
  },
  /**
   * 日期格式字符串增加或者减少指定毫秒数，返回日期字符串
   * @param dateStr 日期字符串值
   * @param pattern 格式类型，为“yyyy-MM-dd HH:mm:ss”子串
   * @param ms 毫秒数
   * @param isReduce 是否是减少
   */
  add: function (dateStr, pattern, ms, isReduce) {
    if (!dateStr) {
      return '';
    }
    let date = this.parse(dateStr, pattern);
    if (isReduce) {
      date = date.getTime() - ms;
    } else {
      date = date.getTime() + ms;
    }
    return this.format(new Date(date), pattern);
  },
  /**
   * 日期格式字符串格式转换
   * @param dateStr 日期字符串值
   * @param pattern 格式类型
   * @param toPattern 格式类型
   */
  convert: function (dateStr, fromPattern, toPattern) {
    if (!dateStr) {
      return '';
    }
    let date = this.parse(dateStr, fromPattern);
    return this.format(date, toPattern);
  },
  /**
   * 获取当前时间
   * 返回格式为 yyyy-MM-dd HH:mm:ss
   * 有传time 则将当前时间蹉转成字符串
   */
  nowDate: function (time) {
    var date = new Date();
    if (time) date = new Date(time);
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var strDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var H = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var M = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var S = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    var currentdate = date.getFullYear() + '-' + month + '-' + strDate + ' ' + H + ':' + M + ':' + S;
    return currentdate;
  },
  // 获取开始结束时间 默认两天 day 过去几天到当前时间 ['2021-02-01 00:00:00','2021-02-03 13:15:50']
  getStartAndEndTime(day = 1) {
    const startTime = new Date();
    startTime.setHours(0, 0, 0);
    const defaultDate = startTime.getTime() - 3600 * 1000 * 24 * day;
    let defaultDateArr = [];
    defaultDateArr[0] = this.format(new Date(defaultDate), 'yyyy-MM-dd HH:mm:ss');
    defaultDateArr[1] = this.format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    return defaultDateArr;
  }
};
export default date