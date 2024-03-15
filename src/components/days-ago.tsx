export function DaysAgo({ time }: { time: string }) {
  const daysAgo = Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
  }).format(new Date(time));

  const fullDate = Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
  }).format(new Date(time));

  return (
    <span title={fullDate} className="text-xs font-normal text-gray-400">
      {daysAgo}
    </span>
  );
}
