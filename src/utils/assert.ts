export function assert(value: unknown): asserts value {
  if (!value) {
    throw new Error(`Assertion failed: ${value}`);
  }
}

export function assertEnum<T extends string>(
  enumType: Record<string, T>,
  value: unknown,
): asserts value is T {
  for (const key in enumType) {
    if (enumType[key] === value) return;
  }

  throw new Error(`Assertion failed: ${value} is not a valid enum value`);
}
