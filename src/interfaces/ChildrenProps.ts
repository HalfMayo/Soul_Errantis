import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode
}

export interface SectionProps extends ChildrenProps {
    id: string,
    topPadding?: boolean
}