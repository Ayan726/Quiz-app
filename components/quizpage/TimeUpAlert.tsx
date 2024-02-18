"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Dispatch, SetStateAction } from "react";

const TimeUpAlert = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Time&apos;s Up!</AlertDialogTitle>
          <AlertDialogDescription>
            your time is up. you can no longer update your answers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>
            Let&apos;s check out the answers
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TimeUpAlert;
