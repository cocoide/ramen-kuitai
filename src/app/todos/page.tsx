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
                    {todos.map((curr: Todo, idx: number) => (
                        <div key={idx}>
                            <Link href={`/todos/${curr.id}`}>Todo: {curr.id}</Link>
                            <p>{curr.completed}</p>
                        </div>
                    ))}
                </>

            </div>
        </Suspense>
    );
}
