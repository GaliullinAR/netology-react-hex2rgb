import hexRgb from "hex-rgb";

export function validateColor(value: string) {
  if (value === undefined) return '';
  let color;

  if (value.length === 7) {
    color = hexRgb(value, { format: "array" });
    if (color.length > 0) return `rgba(${color.join(",")})`;
  } else {
    return "Ошибка!";
  }

}

export function validateStringColor(value: string) {
  if (value === undefined) return "#4d5964";
  if (value === 'Ошибка!') {
    return 'red';
  } else {
    return value;
  }
}