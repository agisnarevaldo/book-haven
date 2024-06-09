import Image from "next/image";
import Link from "next/link";

type Props = {
    count: number;
    title: string;
    icon: string;
    link: string;
    bg: string;
}

export default function Card (props: Props) {
    return (
        <div className={`${props.bg} flex flex-col justify-between shadow-md w-[265px] rounded-2xl`}>
            <div className="flex justify-between p-4">
                <div className="text-text">
                    <h1 className="text-[40px]">
                        {props.count}
                    </h1>
                    <p className="text-[20px]">
                        {props.title}
                    </p>
                </div>
                <Image src={props.icon} alt="Icon" width={100} height={100}/>
            </div>
            <div className="bg-secondary rounded-b-2xl">
                <Link href={props.link} className="flex items-center justify-center gap-2 text-text bg-secondary rounded-b-2xl py-2">
                    More Info
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.21113 7.01213H0C0.392101 3.07521 3.72184 0 7.77173 0C12.0856 0 15.5825 3.48815 15.5825 7.79126C15.5825 12.0944 12.0856 15.5825 7.77173 15.5825C3.72184 15.5825 0.392101 12.5073 0 8.57038H6.20957V10.9078L10.115 7.79126L6.20957 4.67475L6.21113 7.01213Z"
                            fill="#F5F5F5"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}