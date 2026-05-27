export const ChannelSummaryCard = ({
  idChannel,
  nameChannel,
  averageUrgency,
}) => {
  const getColor = (level) => {
    if (level <= 2) return "border-green-500 text-green-500";
    if (level <= 5) return "border-yellow-500 text-yellow-500";
    if (level <= 8) return "border-orange-500 text-orange-500";
    return "border-red-500 text-red-500";
  };

  const colorClass = getColor(averageUrgency);

  return (
    <div className="p-5 bg-white rounded-xl border border-black/10 flex flex-col gap-3 w-full">
      <div>
        <span className="text-xs font-semibold text-black/50 uppercase tracking-wider">
          Canal
        </span>
        <h3 className="text-lg font-bold truncate">{nameChannel}</h3>
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-sm">Urgencia promedio</span>
        <span
          className={`px-2.5 py-1 rounded-md text-sm font-bold border-2 ${colorClass} `}
        >
          {Number(averageUrgency).toFixed(1)}
        </span>
      </div>
    </div>
  );
};
