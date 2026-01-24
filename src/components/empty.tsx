import { Inbox } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmptyStateProps {
  title?: string
  description?: string
  actionLabel?: string
  onAction?: () => void
}

export function EmptyState({
                             title = "暂无数据",
                             description = "当前条件下没有可显示的内容。",
                             actionLabel,
                             onAction,
                           }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
      <Inbox className="h-10 w-10 mb-4" />
      <h3 className="text-base font-medium text-foreground">
        {title}
      </h3>
      <p className="mt-1 text-sm">{description}</p>

      {actionLabel && onAction && (
        <Button
          variant="outline"
          size="sm"
          className="mt-4"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
