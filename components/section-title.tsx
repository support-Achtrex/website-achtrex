export const SectionTitle = ({ children, subtitle, className = '' }: { children: React.ReactNode; subtitle?: React.ReactNode; className?: string }) => (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
        {subtitle && <p className="text-gradient font-semibold text-sm uppercase tracking-wider mb-3">{subtitle}</p>}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">{children}</h2>
    </div>
);