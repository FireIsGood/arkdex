export function toSlug(str: string) {
  return str
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .toLowerCase();
}

export function removeSpace(str: string) {
  return str.replace(/[^\w(-)]+/g, "").toLowerCase();
}
