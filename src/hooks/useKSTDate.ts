export const useKSTDate = (): string => {
  const now = new Date();
  const kstOffset = 9 * 60 * 60 * 1000;
  const localTime = now.getTime();
  const localOffset = now.getTimezoneOffset() * 60 * 1000;
  const utc = localTime + localOffset;
  const kstDate = new Date(utc + kstOffset);
  kstDate.setHours(0, 0, 0, 0);

  const year = kstDate.getFullYear();
  const month = (kstDate.getMonth() + 1).toString().padStart(2, '0');
  const day = kstDate.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};
