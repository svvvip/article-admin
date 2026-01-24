import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import type { ReactNode } from 'react'

interface ConfirmButtonProps {
  triggerText: ReactNode;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  onConfirm: () => void | Promise<void>;
  disabled?: boolean;
  className?: string;
}

export function ConfirmButton({
                                triggerText,
                                title = "确认操作",
                                description = "此操作不可撤销，是否继续？",
                                confirmText = "确认",
                                cancelText = "取消",
                                variant = "default",
                                onConfirm,
                                disabled = false,
                                className
                              }: ConfirmButtonProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={variant} disabled={disabled} className={className}>
          {triggerText}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              await onConfirm();
            }}
          >
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
