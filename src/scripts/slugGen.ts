export function toSlug(str: string) {
  return str
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .toLowerCase();
}
