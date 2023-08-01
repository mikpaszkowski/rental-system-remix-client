
export const SummaryValueLine = ({name, value, className}: { name: string; value: number } & HTMLDivElement) => {
    return <div className={`w-full flex flex-row justify-between ${className}`}>
        <p className="text-sm font-light">{name}</p>
        <p className="text-base font-semibold">{value} XRP</p>
    </div>
}