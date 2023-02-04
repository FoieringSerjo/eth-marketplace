export default function Button({
  children,
  className,
  hoverable = true,
  variant = 'purple',
  ...rest
}) {
  const variants = {
    purple: `text-white bg-indigo-600 ${hoverable && 'hover:bg-indigo-700'}`,
    green: `text-white bg-green-600 ${hoverable && 'hover:bg-green-700'}`,
  };

  return (
    <button
      //* onClick event provided in the ...rest
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 border rounded-md text-base font-medium ${className} ${variants[variant]}`}>
      {children}
    </button>
  );
}
