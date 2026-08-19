export default function WidgetCard({ title, value, change, changeType }: { title: string; value: string; change: string; changeType: 'increase' | 'decrease' }) {
  const changeColor = changeType === 'increase' ? 'text-green-600 bg-green-50' : 'text-error';
  const changeIcon = changeType === 'increase' ? '▲' : '▼';

  return (

    <div
      className="bg-surface-container-lowest p-6 flex flex-col justify-between shadow-[0_16px_32px_-12px_rgba(0,0,0,0.04)] relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      <div>
        <span className="text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant font-bold">{title}</span>
        <h2 className="text-4xl font-black font-headline text-primary mt-1 tracking-tight">
          {value}
        </h2>
      </div>
      {change &&
        <div
          className={`flex items-center mt-4 font-label   w-fit px-2 py-1 rounded font-bold text-sm ${changeColor}`}
        >
          <span className="material-symbols-outlined text-sm mr-1">{changeIcon}</span>
          {change}
        </div>
      }  </div>

  );
}   