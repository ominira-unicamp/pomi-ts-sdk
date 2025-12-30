export type Result<V, E> =
	| { data: V; error: undefined }
	| { data: undefined; error: E };

export function ResultOK<V, E>(data: V): Result<V, E> {
	return { data, error: undefined };
}

export function ResultErr<V, E>(error: E): Result<V, E> {
	return { data: undefined, error };
}