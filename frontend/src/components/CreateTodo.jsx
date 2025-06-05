import { useState } from "react";

export function CreateTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        if (title.trim() && description.trim()) {
            addTodo(title, description);
            setTitle("");
            setDescription("");
        }
    };

    return (
        <div>
            <h2 style={{ marginBottom: '1rem', color: '#4a5568' }}>Add New Todo</h2>
            <input
                type="text"
                placeholder="What needs to be done?"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Add some details..."
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button
                onClick={handleSubmit}
                style={{ width: '100%', marginTop: '1rem' }}
            >
                ➕ Add Todo
            </button>
        </div>
    );
}