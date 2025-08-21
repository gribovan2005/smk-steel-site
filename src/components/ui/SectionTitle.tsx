interface SectionTitleProps {
    children: React.ReactNode;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle, centered = true, className = "" }) => {
    const titleClasses = `text-2xl sm:text-3xl font-bold mb-6 ${centered ? "text-center" : ""} ${className}`;

    const subtitleClasses = `mt-2 text-gray-300 ${centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`;

    return (
        <div className={centered ? "text-center" : ""}>
            <h2 className={titleClasses}>{children}</h2>
            {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
        </div>
    );
};

export default SectionTitle;
