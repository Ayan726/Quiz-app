export const useTimer = (timeLeft: number) => {
  let minute = Math.floor(timeLeft / 60).toString();
  let second = (timeLeft % 60).toString();
  if (second.length === 1) second = "0" + second;
  if (minute.length === 1) minute = "0" + minute;

  return {
    minute,
    second,
  };
};
