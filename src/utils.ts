function formatDate(date: Date): string {
 const  option: Intl.DateTimeFormatOptions ={year: 'numeric', month: 'long', day: 'numeric'};
 return new Date(date).toLocaleDateString(undefined, option);
}

export { formatDate };