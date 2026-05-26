import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    slug: string;
    category: string;
    title: string;
    date: string;
    image: string;
}

export function BlogCard({ slug, category, title, date, image }: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`} className="group block bg-transparent">
            <div className="relative h-[220px] mb-5 overflow-hidden rounded-lg">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-col">
                <span className="text-[#005AB0] font-bold tracking-wide uppercase text-xs mb-3">
                    {category}
                </span>
                <h3 className="text-[22px] font-bold text-white leading-snug mb-3 group-hover:text-[#005AB0] transition-colors line-clamp-3">
                    {title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mt-auto">
                    <span>By Achtrex Engineering</span>
                    <span>&bull;</span>
                    <span>{date}</span>
                </div>
            </div>
        </Link>
    );
}
