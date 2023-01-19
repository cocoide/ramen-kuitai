"use client"
import { ArrowUpLeftIcon, MagnifyingGlassIcon, XMarkIcon, } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface SearchOptionType {
    id: number, text: string,
}
const searchOptions: SearchOptionType[] = [
    { id: 1, text: "新宿 ラーメン おすすめ" },
    { id: 8, text: "新宿　豚骨" },
    { id: 2, text: "渋谷" },
    { id: 3, text: "池袋" },
    { id: 4, text: "高田馬場" },
    { id: 5, text: "明大前" },
    { id: 9, text: "明大前 家系" },
    { id: 9, text: "明大前 二郎" },
    { id: 6, text: "銀座" },
    { id: 7, text: "秋葉原" },
    { id: 8, text: "豚骨" },
    { id: 9, text: "中華そば" },
    { id: 10, text: "二郎系　ランキング" },
];
const SearchForm = () => {
    const router = useRouter()
    const [isFocus, setIsFocus] = useState(false);
    const [suggestions, setSuggestions] = useState<SearchOptionType[] | null>();
    const [keyword, setKeyword] = useState("")
    // const [category, setCategory] = useState<Category[]>([])

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search?q=${keyword}`)
    };
    const handleSuggestionSubmit = (e, suggestedText) => {
        e.preventDefault();
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        router.push(`/search?q=${suggestedText}`)
    };
    const handleChange = (keyword: string) => {
        let matches: SearchOptionType[] = [];
        if (keyword.length > 0) {
            matches = searchOptions.filter((opt) => {
                const regex = new RegExp(`${keyword}`, "gi");
                return opt.text.match(regex);
            });
            setSuggestions(matches);
            setKeyword(keyword);
        };
        if (keyword.length === 0) {
            setSuggestions(null);
        };
        setKeyword(keyword);
    };

    return (
        <>
            <form onSubmit={handleSubmit}
                className='flex  items-center rounded-full shadow-inner p-1 w-auto bg-gray-100 z-20'>
                <button type="submit" className="focus:ring-0 border-none">
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 mx-2" />
                </button>
                <input className="focus:ring-transparent ring-none border-none  rounded-xl  h-15 lg:h-17 p-2
                    w-full bg-gray-100"
                    type="text"
                    placeholder="検索"
                    value={keyword}
                    onFocus={() => setIsFocus(true)}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <div className="flex justify-end items-center space-x-2 mx-3">

                    {keyword.length >= 1 && <button className="rounded-full"
                        onClick={() => {
                            setKeyword("")
                            setSuggestions([])
                        }} type="button">
                        <XMarkIcon className="h-6 w-6 rounded-full text-gray-50 bg-gray-300 p-1" />
                    </button>}
                </div>
            </form>

            {/* Suggest search Section  */}
            {isFocus &&
                <div className="flex flex-col divide-y shadow-natural rounded-xl bg-white">
                    {keyword.length >= 1 &&
                        <form
                            onSubmit={(e) => handleSuggestionSubmit(e, keyword)}>
                            <button className="text-start hover:bg-gray-100 hover:rounded-xl p-3 w-full duration-100
                                flex justify-between items-center">
                                <h3>{keyword}</h3>
                                <ArrowUpLeftIcon className="h-5 w-5 text-primary" />
                            </button>
                        </form>
                    }
                    {suggestions?.map((option) => {
                        return (
                            <form key={option.id}
                                onSubmit={(e) => handleSuggestionSubmit(e, option.text)}>
                                <button key={option.id} className="text-start hover:bg-gray-100 hover:rounded-xl p-3 w-full duration-100
                                flex justify-between items-center">
                                    <h3>{option.text}</h3>
                                    <ArrowUpLeftIcon className="h-5 w-5 text-primary" />
                                </button>
                            </form>
                        )
                    })}
                </div>
            }
        </>
    )
}
export default SearchForm