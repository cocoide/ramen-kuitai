import Link from 'next/link';
import React, { Suspense } from "react";
import { Todo } from '../../../types';

const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos: Todo[] = await res.json();
    return todos;
};

export default async function Todos() {
    const todos = await fetchTodos();

    return (
        <Suspense fallback={<p className="mt-4">TODO データ Loading...</p>}>
            <div>
                <>
                    {todos.map((ramen: Todo, id: number) => (
                        <div key={id}>
                            <Link href={`/bookmarks/${ramen.id}`}>Todo: {ramen.id}</Link>
                            <p>{ramen.completed}</p>
                        </div>
                    ))}
                </>

            </div>
        </Suspense>
    );
}
