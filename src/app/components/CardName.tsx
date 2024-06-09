import Image from "next/image";

type Props = {
    src: string;
    name: string;
    role: string;
    isOnline: boolean;
}

export default  function CardName(props: Props) {
    return (
        <div className="flex bg-[#EAE3D2] w-[538px] shadow-xl justify-center items-center rounded-2xl gap-4 py-10">
            <div>
                <Image src={props.src} alt="User" width={120} height={120}/>
            </div>
            <div>
                <h1 className="font-bold text-xl">{props.name}</h1>
                <p>{props.role}</p>
                <p>{props.isOnline ? 'Online' : 'Offline'}</p>
            </div>
        </div>
    )
}