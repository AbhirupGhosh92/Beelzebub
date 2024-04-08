import Image from 'next/image'
export default function ProfileImage({url,callback} : Readonly<{url : string,callback : ()=>void}>){

    return(
        url.length === 0 ? <div className="flex w-10 h-10 bg-stone-200 animate-pulse self-center rounded-full mr-8"/> :
        <button onClick={callback}>
        <Image className="flex w-10 h-10 self-center rounded-full mr-8 hover:cursor-pointer"
      src={url}
      width={76}
      height={76}
      alt="Profile Picture"
    />
    </button>
    )
}