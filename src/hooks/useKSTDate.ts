import { format } from 'date-fns';

export const useKSTDate = (): string => {
  return format(new Date(), 'yyyy-MM-dd');
};

