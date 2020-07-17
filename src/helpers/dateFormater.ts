export const dateFormater = (date: number): string => {
  return new Date(date * 1000)
    .toLocaleDateString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
}

export const timeFormater = (date: number): IFormatedTime => {
  const dt: Date = new Date(date * 1000);
  const time = (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours() + ":" + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()))
  return ({
    date: dt.getDate() + '.' + (dt.getMonth() + 1),
    time: time,
    hour: dt.getHours(),
  })
}

interface IFormatedTime {
  time: string;
  date: string;
  hour: number;
}