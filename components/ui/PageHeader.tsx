interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumb?: string[]
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="bg-primary pt-32 pb-16 text-white text-center">
      {breadcrumb && (
        <p className="text-accent text-sm mb-2">{breadcrumb.join(' > ')}</p>
      )}
      <h1 className="text-3xl md:text-4xl font-bold font-serif mb-3">{title}</h1>
      {subtitle && <p className="text-gray-300 text-sm md:text-base">{subtitle}</p>}
    </section>
  )
}
