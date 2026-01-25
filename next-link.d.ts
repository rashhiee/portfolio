declare module 'next/link' {
    import React from 'react';
    import { LinkProps as NextLinkProps } from 'next/dist/client/link';

    export interface LinkProps extends NextLinkProps {
        className?: string;
        children?: React.ReactNode;
        style?: React.CSSProperties;
        onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
        onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
        onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    }

    const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
    export default Link;
}
