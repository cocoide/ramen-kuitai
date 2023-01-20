
import SearchForm from '../explore/SearchForm';
export const revalidate = 0

const SearchPage = async ({
    searchParams, }: {
        searchParams?: Record<string, string | string[] | undefined>;
    }
) => {
    return (
        <>
            <SearchForm />
            <div>{searchParams?.q}</div>
            <div>{searchParams?.address}</div>
        </>
    )
}
export default SearchPage