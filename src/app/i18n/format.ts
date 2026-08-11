export const formatCopy = (
  template: string,
  values: Record<string, string>
): string =>
  Object.entries(values).reduce(
    (result, [key, value]) => result.split(`{${key}}`).join(value),
    template
  );
