import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {
    return (
        <>
            <div className="flex justify-between px-4 pt-8">
                <p>
                    Showing of {links.from} to {links.to} total {links.total}
                </p>
                <div className="flex items-center justify-center gap-2">
                    {links.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className={`btn btn-sm ${link.active ? 'btn-primary' : 'btn-ghost'} ${!link.url ? 'btn-disabled' : ''} `}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        ></Link>
                    ))}
                </div>
            </div>
        </>
    );
}
