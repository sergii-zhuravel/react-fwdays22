export function isNullOrUndefined(object: unknown): object is null | undefined {
  return object == null;
}

export function isNull(object: unknown): object is null {
  return object === null;
}

export function isBoolean(object: unknown): object is boolean {
  return typeof object === "boolean";
}

export function isArray<T = unknown>(object: unknown): object is Array<T> {
  return Array.isArray(object);
}
