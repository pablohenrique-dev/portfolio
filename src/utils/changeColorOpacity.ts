export function changeColorOpacity(
  color: string,
  desiredOpacity: number | string,
) {
  let colorArray = color.replace(/[rgba\(\)]/g, "").split(",");

  colorArray[3] = String(desiredOpacity);

  const colorWithNewOpacity = "rgba(" + colorArray.join(",") + ")";

  return colorWithNewOpacity;
}
