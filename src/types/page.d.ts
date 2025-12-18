export type Breadcrumb = {
    url?: string;
    title: string;
};

export type Menu = {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
        title: string;
        url: string;
    }[];
};
