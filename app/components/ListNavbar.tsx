import { Button } from "./Button"

export const ListNavbar = () => {
    return (
        <div className="flex flex-row justify-between">
            <div>
                <Button name="Availability" onClick={() => { }} className="mr-4" />
                <Button name="Recently Added" onClick={() => { }} />
            </div>
            <div className="flex flex-row items-center text-secondary bg-primary h-11 rounded-md px-4">
                <i className="ri-search-line mr-2"></i>
                <input type="text" className="bg-primary outline-none w-full h-full bg-transparent text-secondary font-light placeholder:text-secondary" placeholder="Quick Search ..." onChange={() => { }} />
            </div>
        </div>
    )
}