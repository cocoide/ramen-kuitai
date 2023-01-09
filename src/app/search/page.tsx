const SearchPage = (
    { searchParams, }: {
        searchParams?: { [key: string]: string | string[] | undefined };
    }
) => {
    return (
        <>
            <div>{searchParams.q}</div>
            <div>{searchParams.address}</div>
        </>
    )
}
export default SearchPage