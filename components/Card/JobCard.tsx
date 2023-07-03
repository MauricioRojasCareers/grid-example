import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

interface CardContentProps extends CardProps {
  name: string;
  job: string;
  address: string;
  phoneNumber: string;
}

export function JobCard({
  className,
  name,
  job,
  phoneNumber,
  address,
  ...props
}: CardContentProps) {
  return (
    <Card className={cn("container", className)} {...props}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{job}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{phoneNumber}</p>
              <p className="text-sm text-muted-foreground">{address}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
