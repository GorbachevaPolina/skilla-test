export const getStartDate = (n: number) => {
    const date = new Date();
    date.setDate(date.getDate() - n);
    const pad = (n: number) => n.toString().padStart(2, '0');
  
    const yyyy = date.getFullYear(),
      mm = pad(date.getMonth() + 1),
      dd = pad(date.getDate());
  
    return `${yyyy}-${mm}-${dd}`;
  }

export const getToday = () => {
    const date = new Date();
    date.setDate(date.getDate());
    const pad = (n: number) => n.toString().padStart(2, '0');
  
    const yyyy = date.getFullYear(),
      mm = pad(date.getMonth() + 1),
      dd = pad(date.getDate());

    return `${yyyy}-${mm}-${dd}`;
}

export const parseTime = (date: string) => {
  return date.slice(11, 16)
}

export const parseSeconds = (seconds: number) => {
  let mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  let ss = String(seconds % 60).padStart(2, '0')

  return seconds > 0 ? `${mm}:${ss}` : null
}