
import SearchForm from '../explore/SearchForm';


const SearchPage = async (
    { searchParams, }: {
        searchParams?: { [key: string]: string | string[] | undefined };
    }
) => {
    return (
        <>
            <SearchForm />
            <div>{searchParams.q}</div>
            <div>{searchParams.address}</div>
        </>
    )
}
export default SearchPage