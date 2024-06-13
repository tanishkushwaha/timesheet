export const getWeeks = (month: Date) => {
  const firstDay = month;

  const numberOfWeeks =
    firstDay.getDay() === 0 || firstDay.getDay() === 6 ? 5 : 4;

  if (firstDay.getDay() != 0) {
    firstDay.setDate(firstDay.getDate() + (7 - firstDay.getDay()));
  }

  const weeks: string[][] = [];

  for (let i = 0; i < numberOfWeeks; i++) {
    weeks[i] = [];

    for (let j = 0; j < 7; j++) {
      weeks[i][j] = firstDay.toISOString();
      firstDay.setDate(firstDay.getDate() + 1);
    }
  }

  return weeks;
};

export const getDateString = (ISO: string) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(ISO);

  return `${date.getDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}`;
};
