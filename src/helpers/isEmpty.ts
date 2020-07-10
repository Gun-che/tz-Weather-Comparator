export function isEmpty(obj: object): boolean {
  for (let key in obj) {
    return false;
  }
  return true;
}