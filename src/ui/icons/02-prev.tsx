import { classNames } from "@/utils/classnames";
import { SVGProps } from "react";

export function IconPrev({ className, title, ...rest }: SVGProps<SVGSVGElement> & { title?: string; }) {
    return (
        <svg className={classNames(className)} viewBox="0 0 64 64" {...rest}>
            {title && <title>{title}</title>}
            <path d="M48 57a1 1 0 0 1-.6-.2l-32-24a1 1 0 0 1 0-1.6l32-24a1 1 0 0 1 1.2 1.6L17.67 32 48.6 55.2a1 1 0 0 1 .2 1.4 1 1 0 0 1-.8.4Z" />
        </svg>
    );
}
