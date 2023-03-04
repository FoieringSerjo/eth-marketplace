import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ActiveLink({
  children,
  activeLinkClass,
  ...props
}) {
  const { pathname } = useRouter();
  let className = children.props.className || '';

  //! text-indigo-600 not working somehow
  if (pathname === props.href) {
    className = `${className} ${
      activeLinkClass ? activeLinkClass : 'text-indigo-500'
    }`;
  }

  return (
    <Link
      legacyBehavior
      {...props}>
      {React.cloneElement(children, { className })}
    </Link>
  );
}
