import { Children, cloneElement, isValidElement, type ReactNode } from "react";

// Keep every legal text node intact; only internal navigation receives the EN prefix.
export function englishLegalLinks(content: ReactNode): ReactNode {
  return Children.map(content, child => {
    if (!isValidElement<{ href?: string; children?: ReactNode }>(child)) return child;
    const href = child.props.href;
    return cloneElement(child, {
      ...(href?.startsWith("/") && !href.startsWith("//") ? { href: `/en${href === "/" ? "" : href}` } : {}),
      ...(child.props.children !== undefined ? { children: englishLegalLinks(child.props.children) } : {}),
    });
  });
}
