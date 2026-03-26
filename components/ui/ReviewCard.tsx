interface ReviewCardProps {
  content: string
  author: string
  service: string
}

export default function ReviewCard({ content, author, service }: ReviewCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
      <p className="text-accent text-lg mb-3" aria-label="별점 5점">★★★★★</p>
      <p className="text-textprimary text-sm leading-relaxed mb-4">&ldquo;{content}&rdquo;</p>
      <div className="border-t border-gray-100 pt-3">
        <p className="text-textsecondary text-xs">{author} · {service}</p>
      </div>
    </div>
  )
}
