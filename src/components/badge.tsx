import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  onClick?: () => void;
};

export const Badge: React.FC<Props> = ({ className, children, onClick, ...otherProps }) => {
  return (
    <span
      className={classNames(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs leading-4 bg-slate-200 text-slate-600',
        className,
      )}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </span>
  );
};
