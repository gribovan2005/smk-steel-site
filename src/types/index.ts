export interface Service {
    name: string;
    price?: string;
    desc: string;
    img: string;
}

export interface Construction {
    name: string;
    price: string;
    img: string;
}

export interface PublicOrder {
    id: string;
    title: string;
    createdAt: string;
    clientName?: string;
    location?: string;
    description?: string;
    images: string[];
    tags?: string[];
}

export interface LeadFormData {
    name?: string;
    phone: string;
    email?: string;
    message?: string;
    files?: FileList;
}

export interface ApiResponse<T = unknown> {
    ok: boolean;
    data?: T;
    error?: string;
}

export type ButtonVariant = "primary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
    type?: "button" | "submit" | "reset";
}

export interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export interface SeoData {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    canonical?: string;
}

export interface NavLink {
    href: string;
    label: string;
    external?: boolean;
}
