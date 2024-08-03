import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NewJobForm = () => {
  return (
    <form className="h-fit flex flex-col gap-3 p-2">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-gray-800" htmlFor="title">
          Job Title *
        </label>
        <Input
          name="title"
          className="w-full border-gray-400"
          placeholder="Job Title"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-semibold text-gray-800"
          htmlFor="description"
        >
          Job Description *
        </label>
        <Input
          name="description"
          className="w-full border-gray-400"
          placeholder="Job Title"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-semibold text-gray-800"
          htmlFor="company_name"
        >
          Company Name *
        </label>
        <Input
          name="comapany_name"
          className="w-full border-gray-400"
          placeholder="Company Name"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-gray-800" htmlFor="salary">
          Salary *
        </label>
        <div className="flex justify-center items-center gap-2">
          <Select>
            <SelectTrigger className="w-24">
              <SelectValue defaultValue="USD" placeholder="USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="INR">INR</SelectItem>
            </SelectContent>
          </Select>
          <Input
            name="salary"
            className="w-full border-gray-400"
            placeholder="Salary"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-semibold text-gray-800"
          htmlFor="description"
        >
          Location *
        </label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select loaction type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="REMOTE">Remote</SelectItem>
            <SelectItem value="HYBRID">Hybird</SelectItem>
            <SelectItem value="OFFICE">Office</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full flex justify-end items-center mt-4">
        <Button>Create Job</Button>
      </div>
    </form>
  );
};

export default NewJobForm;
