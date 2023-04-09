export default function Title({ title }: { title: string }) {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="text-6xl font-bold">{title}</h1>
    </div>
  );
}
