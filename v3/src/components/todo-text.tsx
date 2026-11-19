const TODO_PREFIX = 'TODO(Nat):'

export const isTodo = (text: string) => text.startsWith(TODO_PREFIX)

type TodoTextProps = {
	text: string
}

// Renders copy, and makes anything Nat still needs to fill in impossible to miss.
export const TodoText = ({ text }: TodoTextProps) =>
	isTodo(text) ? <span className="todo-marker">{text}</span> : <>{text}</>
