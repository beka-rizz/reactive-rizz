export default function toUpperCase(str: string) {
  return str[0].toUpperCase() + str.substring(1, str.length);
}