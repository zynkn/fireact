import moment from 'moment';

export const labelSet = [
  { color: 'yellow', name: '유산소', eng: 'run' },
  { color: 'green', name: '등', eng: 'back' },
  { color: 'skyblue', name: '가슴', eng: 'chest' },
  { color: 'blue', name: '삼두', eng: 'triceps' },
  { color: 'purple', name: '이두', eng: 'biceps' },
  { color: 'orange', name: '어깨', eng: 'shoulder' },
  { color: 'brown', name: '하체', eng: 'legs' },
  { color: 'red', name: '복부', eng: 'abs' },
];

export default (function () {

  return {
    getCalendarDates: (start: number, end: number, format: string = 'YYYY-MM-DD') => {
      let calendar: any = [];
      for (let week = start; week <= end; week++) {
        calendar.push(
          Array(7).fill(0).map((n, i) => {
            let current = moment().week(week).startOf('week').add(n + i, 'day');
            return current.format(format);
          })
        )
      }
      return calendar.flat();
    },
    getUniqueItem: (data: any, key: string = 'type') => {
      console.log(data);
      let labels: { [key: string]: Array<string> } = {};
      for (let i in data) {
        let temp = new Set();
        for (let j in data[i]) {
          temp.add(data[i][j][key]);
        }
        labels[i] = Array.from(temp);
      }
      return labels;
    }

  }

})();