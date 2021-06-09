export function Logo({ width }: { width: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="cass-logo"
      viewBox="0 0 400 400"
      width={width}
      height={width}
    >
      <title id="cass-logo">Cass logo</title>
      <circle cx="200" cy="200" r="200" />
      <circle cx="200" cy="200" r="170" fill="#fff" />
      <circle cx="200" cy="200" r="130" />
      <circle cx="200" cy="200" r="100" fill="#fff" />
      <circle cx="200" cy="200" r="64" />
      <rect x="255" y="180" fill="black" width="140" height="40" />
    </svg>
  );
}
