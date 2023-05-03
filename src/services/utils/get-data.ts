import { getStartDate, getToday } from "./date-conversion";

export const getDataReq = async (days: number, in_out: string) => {
    try {
      let today = getToday();
      let startDate = getStartDate(days-1);
      const response = await fetch(
        `https://api.skilla.ru/mango/getList?date_start=${startDate}&date_end=${today}&in_out=${in_out}`,
        {
          method: 'POST',
          headers: {
            "Authorization": 'Bearer testtoken',
            'Content-Type': 'application/json',
          }
        }
      )
      const result = await response.json()
      return result
    } catch (error: any) {
      console.error(error.message)
    }
  }