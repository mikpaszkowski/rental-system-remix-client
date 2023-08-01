export class DateUtils {
  static formatDateToShortString(date: Date | undefined): string {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
    if(!date) {
      return "";
    }

    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate.replace(',', '');
  }
}