type PageProps = {
    params: {
        slug: string;
    };
};

const RamenDetail = async ({ params }: PageProps) => {
    const { slug } = params;


    // const getRamenDetail = async (id: number) => { }

    // const ramen = await getRamenDetail(id);
    // if (!ramen.id) {
    //     notFound();
    // }

    return (
        <>
            <div className="p-2">
                <h1 className="">ラーメン屋の詳細ページ {slug}</h1>
                <div>
                </div>
            </div>
        </>
    );
};

export default RamenDetail;