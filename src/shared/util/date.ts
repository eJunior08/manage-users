import formatDateFNS from 'date-fns/format';

export function formatDate(date: Date, format = 'dd/MM/yyyy') {
  return formatDateFNS(date, format);
}
