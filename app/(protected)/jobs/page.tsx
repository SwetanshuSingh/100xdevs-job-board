import Sidebar from "@/components/Sidebar";

const JobsPage = () => {
  return (
    <section className="relative w-full h-fit flex gap-2 flex-grow p-2">
      <Sidebar />
      <section className="w-full border border-gray-200 rounded-md py-4 px-6">
        <h3 className="lg:text-5xl text-gray-900 tracking-tight font-semibold">
          All Developer Jobs
        </h3>
      </section>
    </section>
  );
};

export default JobsPage;
