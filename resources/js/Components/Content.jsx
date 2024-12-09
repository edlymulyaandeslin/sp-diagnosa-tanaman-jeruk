export default function Content({ children, className }) {
    return <div className={`min-h-[440px] ${className}`}>{children}</div>;
}
