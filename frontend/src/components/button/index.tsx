import { Icon } from "@iconify/react/dist/iconify.js";
import { allIcon } from "../../constants/icon/index";
import { cn } from "@/libs/cn";

interface ButtonProps {
	color?: Color;
	title?: string;
	iconName?: IconName;
	tooltip?: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
};

type IconName = "print" | "eye" | "delete" | "edit" | "save" | "add" | "cancel";
type Color = "blue" | "green" | "red" | "teal";

export default function Button({
	title,
	iconName,
	color,
	tooltip,
	onClick,
	type = "button",
	disabled,
}: ButtonProps) {
	return (
		<button
			onClick={onClick}
			data-tip={tooltip}
			type={type}
			disabled={disabled}
			className={cn("btn btn-sm h-10 text-white flex rounded-lg",
				tooltip && "tooltip w-14",
				!color && "bg-gray-600 hover:bg-gray-500",
				color === "blue" && "bg-blue-600 hover:bg-blue-500",
				color === "green" && "bg-green-600 hover:bg-green-500",
				color === "teal" && "bg-teal-600 hover:bg-teal-500",
				color === "red" && "bg-red-600 hover:bg-red-500",
			)}
		>
			<span className="flex items-center gap-2">
				{title && <span>{title}</span>}
				{iconName && <Icon icon={allIcon[iconName]} width={title ? 14 : 20} />}
			</span>
		</button>
	);
}
