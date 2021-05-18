const formatSeconds = (timeValue) => {
  let format = "";
  let hh = 0;
  let min = 0;
  let seg = 0;

  if (timeValue === 7200) {
    hh = 2;
    min = 0;
    seg = 0;
    format = `${hh}:${min}:${seg}`;
  } else if (timeValue >= 3600 && timeValue < 7200) {
    hh = 1;
    min = timeValue - 3600;
    min = Math.floor(min / 60);
    min = min < 10 ? `0${min}` : min;
    seg = timeValue % 60;
    seg = seg < 10 ? `0${seg}` : seg;
    format = `${hh}:${min}:${seg}`;
  } else {
    min = min < 10 ? `0${min}` : min;
    min = Math.floor(timeValue / 60);
    min = min < 10 ? `0${min}` : min;
    seg = timeValue % 60;
    seg = seg < 10 ? `0${seg}` : seg;
    format = `${min}:${seg}`;
  }

  return { format, hh, min, seg };
};

export default formatSeconds;
