export default function GameStats({ matched, total }) {
  return (
    <div className="flex items-center gap-2 text-white/70">
      <span className="text-xs">Matched</span>
      <span className="text-xs font-bold text-white">
        {matched} / {total}
      </span>
    </div>
  );
}