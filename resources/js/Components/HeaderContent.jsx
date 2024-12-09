import { Link } from '@inertiajs/react';

export default function HeaderContent({ title, btnTitle, href }) {
    return (
        <div className="mx-8 flex items-center justify-between gap-4">
            <h1 className="my-8 text-center text-3xl font-bold">{title}</h1>
            <Link href={href} className="btn btn-primary">
                {btnTitle}
            </Link>
        </div>
    );
}
