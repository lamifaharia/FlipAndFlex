export default function GameStats({
  matched,
  total,
}) {
  return (
    <div className="flex justify-between mt-2 text-white/70">

      <span>

        Matched

      </span>

      <span>

        {matched} / {total}

      </span>

    </div>
  );
}