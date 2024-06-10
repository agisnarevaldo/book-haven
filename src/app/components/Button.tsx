import { Icon } from "@iconify/react/dist/iconify.js";

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

export default function Button ({ children, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="bg-primary flex items-center px-3 py-2 rounded-lg text-white tracking-wide hover:bg-[#607EAA]"
        >
            <Icon icon="mingcute:add-fill" />
            {children}
        </button>
    );
}