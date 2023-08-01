export const SlideInDialogWrapper = ({children}: Partial<HTMLDivElement>) => {
    return (
        <div
            className="fixed top-0 right-0 h-full w-1/2 bg-dialog text-primary border-light-purple border-2 rounded-l-xl overflow-hidden">
            <div className="relative flex flex-col justify-between w-full h-full">
                {children}
            </div>
        </div>)

}