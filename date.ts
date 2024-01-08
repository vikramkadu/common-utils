import moment from "moment";
import { NotificationGroup } from "../../interface/notification";

export const utctolocaldifference = (date) => {
  const stillUtc = moment.utc(date).toDate();
  const local = moment(stillUtc).local().format();
  const now = moment();
  const differenceInSeconds = now.diff(local, 'seconds');
  if (differenceInSeconds < 60) {
    if (differenceInSeconds < 5) {
      return ' just now';
    } else {
      return differenceInSeconds + ' seconds';
    }
  }
  const differenceInMinutes = now.diff(local, 'minutes');
  if (differenceInMinutes < 60) {
    return differenceInMinutes + ' minutes';
  }
  const differenceInHours = now.diff(local, 'hours');
  if (differenceInHours < 24) {
    return differenceInHours + ' hours';
  }
  const differenceInDays = now.diff(local, 'days');
  if (differenceInDays < 365) {
    return differenceInDays + ' days ago';
  }
  const differenceInYears = now.diff(local, 'years');
  return differenceInYears + ' years ago';
};

export const formatToShortDateLocal = (utcDate: Date): string => {
  const utcDateTime = moment(utcDate);
  const localDateTime = utcDateTime.local();
  return localDateTime.format('D MMM YYYY');
};

export function formatTime(durationInSeconds) {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = Math.floor(durationInSeconds % 60);

  return (
    (hours > 0 ? hours.toString().padStart(2, '0') + ':' : '') +
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0')
  );
}

export const groupNotificationsByDate = (notifications) => {
  const groupedNotifications: NotificationGroup[] = [];

  const addToGroup = (group: string, notification) => {
    if (!groupedNotifications[group]) {
      groupedNotifications[group] = [];
    }
    groupedNotifications[group].push(notification);
  };

  notifications.forEach((notification) => {
    const timestamp = moment(notification.timestamp);
    const today = moment();
    const yesterday = moment().subtract(1, 'days');
    const aWeekAgo = moment().subtract(7, 'days');
    const aMonthAgo = moment().subtract(30, 'days');
    const aYearAgo = moment().subtract(365, 'days');

    if (timestamp.isSameOrAfter(today, 'day')) {
      addToGroup('Today', notification);
    } else if (timestamp.isSameOrAfter(yesterday, 'day')) {
      addToGroup('Yesterday', notification);
    } else if (timestamp.isSameOrAfter(aWeekAgo, 'day')) {
      addToGroup('A Week Ago', notification);
    } else if (timestamp.isSameOrAfter(aMonthAgo, 'day')) {
      addToGroup('A Month Ago', notification);
    } else if (timestamp.isSameOrAfter(aYearAgo, 'day')) {
      addToGroup('A Year Ago', notification);
    }
  });

  return groupedNotifications;
};
