export function Todos({ todos, markCompleted }) {
    return (
        <div>
            {todos.map(function (todo) {
                return (
                    <div 
                        key={todo._id} 
                        className={`todo-item ${todo.completed ? 'completed' : ''}`}
                        style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}
                    >
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button
                            style={{ padding: 5, margin: 5 }}
                            disabled={todo.completed}
                            onClick={() => markCompleted(todo._id)}
                        >
                            {todo.completed ? "✓ Completed" : "Mark as Completed"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}