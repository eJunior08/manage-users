import formatDateFNS from 'date-fns/format';

export function formatDate(date: Date, format = 'dd/MM/yyyy') {
  try {
    console.log({date});
    return formatDateFNS(date, format);
  } catch (error) {
    const message = 'Erro ao tentar formatar data.';
    console.error(message, error);
    return '';
  }
}
