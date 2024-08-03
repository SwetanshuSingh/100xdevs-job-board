import { auth } from "@/auth";
import { redirect } from "next/navigation";

const ManageJobsPage = async () => {

    const session = await auth();
    const role = session?.user.role;

    if(role !== "ADMIN") {
        redirect("/")
    }

    return (
        <div className="w-full flex-grow p-2">
            <h2>Manage Jobs</h2>
        </div>
    )
}

export default ManageJobsPage;