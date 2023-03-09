const SIZES = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
};

export default function Loader({ size = 'md' }) {
  return (
    <div className={`dot-spinner`}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`dot-${i}`}
          className={`dot-spinner__dot ${SIZES[size]}`}></div>
      ))}
    </div>
  );
}
