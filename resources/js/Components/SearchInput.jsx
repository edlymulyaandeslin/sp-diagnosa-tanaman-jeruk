import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function SearchInput({ routeName }) {
    const [keyword, setKeyword] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        const key = keyword.trim();

        // if (!key) return;

        router.get(route(routeName, { search: key }));
    };

    useEffect(() => {
        // Ambil nilai 'search' dari query parameter di URL
        const params = new URLSearchParams(window.location.search);
        const searchQuery = params.get('search') || '';
        setKeyword(searchQuery);
    }, []);
    return (
        <div className="w-full max-w-lg px-4">
            <form onSubmit={handleSearch}>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className="grow border-none focus:ring-0"
                        placeholder="Search"
                        autoFocus
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
            </form>
        </div>
    );
}
