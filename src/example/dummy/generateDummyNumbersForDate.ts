const generateDummyNumbersForDate = (count: number, suffix?: string) => {
  let data = [];

  for (let i = 1; i <= count; i++) {
    data.push({ key: i.toString(), value: i + '' + suffix });
  }

  return data;
};

export default generateDummyNumbersForDate;
