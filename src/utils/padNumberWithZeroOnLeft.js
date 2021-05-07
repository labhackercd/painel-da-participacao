export default function padNumberWithZeroOnLeft(d) {
  return (d < 10 ? `0${d.toString()}` : d.toString());
}
