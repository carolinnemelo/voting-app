type Props = {
  errors: string[];
};

export function ErrorMessage({ errors }: Props) {
  return (errors.map((error) => {
    return (
      <p className="mt-2 text-xs text-red-500" key={error}>
        {error}
      </p>
    );
  }))
}