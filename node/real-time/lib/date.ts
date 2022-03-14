import dayjs from 'dayjs';

export const formatDate = (time: number) => {
  return dayjs(time).format('D MMM YY - h:mm a');
};
