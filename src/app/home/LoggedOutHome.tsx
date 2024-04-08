import SectionFirstHome from "./SectionFirstHome";

export default function LoggedOutHome()
{
    return(
        <div>
        <div className="w-full h-screen bg-pink-500">
            <SectionFirstHome/>
        </div>
        <div className="w-full h-screen bg-yellow-500"></div>
        </div>
    );
}