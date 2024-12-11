export function formatDateToLong(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "2-digit",
    year: "numeric",
  };

  return date.toLocaleDateString("pt-BR", options);
}

export function formatDateToCustomFormat(date: string): string {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date string provided");
  }

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "2-digit",
    year: "numeric",
  };

  const formattedDate = parsedDate.toLocaleDateString("pt-BR", options);

  const [day, month, year] = formattedDate.split(" de ");
  return `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}, ${year}`;
}
