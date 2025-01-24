import { Link } from 'react-router';

type AppLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export default function AppLink({ to, children, ...props }: AppLinkProps) {
  const isExternal = to.startsWith('http');
  console.log(isExternal);
  return isExternal ? (
    <a
      href={to}
      target='_blank'
      rel='noopener noreferrer'
      {...props}
      className={`text-gray-600 hover:text-blue-600 transition-color file:${props.className}`}
    >
      {children}
    </a>
  ) : (
    <Link
      to={to}
      {...props}
      className={`text-gray-600 hover:text-blue-600 transition-color file:${props.className}`}
    >
      {children}
    </Link>
  );
}
