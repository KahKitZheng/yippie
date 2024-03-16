export function formatLocalDate(date: Date) {
  return new Date(date).toLocaleDateString().replace(/\//g, "-");
}
