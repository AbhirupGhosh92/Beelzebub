export default function LargeButton({children,callback} : Readonly<{children:React.ReactNode,callback:()=>void}>)
{
    return(
        <button className = "bg-white h-16 w-48 text-black border-2 border-black rounded-full hover:bg-indigo-200 hover:scale-105 transition-transform ease-in-out hover:shadow-md"onClick={callback}><text>{children}</text></button>
    );
}