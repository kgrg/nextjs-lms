import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import exp from "constants";


const backgroundVariants = cva(
    "rounded-full flex items-center justify-center",
    {
        variants: {
            variant: {
                default: "bg-sky-100",
                success: "bg-emerald-100",
            },
            iconVariant: {
                default: "text-sky-600",
                success: "text-emerald-600",
            },
            size: {
                default: "p-2",
                small: "p-1",
            },
        }
    }
)

const iconVariants = cva(
    "d",
    {
        variants: {
            variant: {
                default: "text-sky-700",
                success: "text-emerald-700",
            },
            size: {
                default: "h-8 w-8",
                small: "h-4 w-4",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

type backgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type iconVariantProps = VariantProps<typeof iconVariants>;

interface IconBadgeProps extends backgroundVariantsProps, iconVariantProps {
    icon: LucideIcon;
}

export const IconBadge = ({
    icon: Icon,
    variant,
    size
}: IconBadgeProps) => {
    return (
        <div className={cn(backgroundVariants({ variant, size }))}>
            <Icon className={cn(iconVariants({ variant, size }))} />
        </div>
    )
}