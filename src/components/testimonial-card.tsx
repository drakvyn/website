import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import Markdown from "react-markdown";

interface Props {
  quote: string;
  name: string;
  title: string;
  company?: string;
  image?: string;
  className?: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialCard({
  quote,
  name,
  title,
  company,
  image,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-4 rounded-xl border border-border p-6 transition-all duration-200 hover:ring-2 hover:ring-muted",
        className
      )}
    >
      <Quote className="size-5 shrink-0 text-muted-foreground/60" aria-hidden />
      <div className="flex-1 text-sm leading-relaxed text-muted-foreground prose dark:prose-invert max-w-full">
        <Markdown>{quote}</Markdown>
      </div>
      <div className="flex items-center gap-3 border-t border-border pt-4">
        <Avatar className="size-10 border ring-2 ring-border">
          {image ? <AvatarImage alt={name} src={image} /> : null}
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate font-semibold leading-none">{name}</p>
          <p className="mt-1 truncate text-xs text-muted-foreground">
            {title}
            {company ? ` · ${company}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
