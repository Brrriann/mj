import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block border border-gray-200 rounded-lg p-6 hover:border-accent transition-all duration-200 hover:shadow-md cursor-pointer"
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-primary font-bold text-lg mb-2 group-hover:text-accent transition-colors duration-200">{title}</h3>
      <p className="text-textsecondary text-sm leading-relaxed">{description}</p>
      <p className="text-accent text-sm font-medium mt-4">자세히 보기 →</p>
    </Link>
  )
}
