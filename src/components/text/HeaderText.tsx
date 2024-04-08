export default function HeaderText({children} : Readonly<{children : React.ReactNode}>){
    return(
        <text className="flex ml-4 md:ml-16 text-xl sm:text-xl xl:text-4xl text-black self-center">{children}</text>
    )
}