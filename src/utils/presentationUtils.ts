export function formatDate(date: string | Date): string {
  if (!date) return "";

  let dateObj: Date;

  if (typeof date === "string") {
    const [year, month, day] = date.split("-");
    if (!year || !month || !day) return date;
    dateObj = new Date(+year, +month - 1, +day);
  } else if (date instanceof Date) {
    dateObj = date;
  } else {
    return "";
  }

  try {
    return dateObj.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return date.toString();
  }
}
