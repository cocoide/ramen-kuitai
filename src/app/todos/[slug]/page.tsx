import { Todo } from '../../../../types';

// https://github.com/michaelrambeau/bestofjs-nextjs13/blob/main/app/projects/%5Bslug%5D/page.tsx
type PageProps = {
    params: {
        slug: string;
    };
};

const page = async ({ params }: PageProps) => {
    const { slug } = params;
    const todo = await fetchTodo(slug);


    return (
        <div className="">
            <div>params:{params.slug}</div>
            <div>id:{todo.id}</div>
            <div> title:{todo.title}</div>
            <div> uid:{todo.userId}</div>
        </div>
    )
}
export default page

const fetchTodo = async (slug: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${slug}`);
    const todo = await res.json();
    return todo;
};