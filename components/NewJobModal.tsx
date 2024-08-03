import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import NewJobForm from "./forms/NewJobForm";

const NewJobModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Job</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter the Job details below</DialogTitle>
          <DialogDescription>
            This form contains all the job details that are required to post a
            job
          </DialogDescription>
        </DialogHeader>
        <NewJobForm />
      </DialogContent>
    </Dialog>
  );
};

export default NewJobModal;
