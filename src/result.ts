type Result<V, E> = 
	{ data: V, error: never }
	| { data: never, error: E }

function ResultOK<V, E>(data: V): Result<V, E> {
	return { data, error: undefined as never };
}
function ResultErr<V, E>(error: E): Result<V, E> {
	return { data: undefined as never, error };
}
export { ResultOK, ResultErr }
export type { Result } 