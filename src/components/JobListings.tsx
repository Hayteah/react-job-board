import { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

interface CompanyProps {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}

interface DataProps {
  id: number;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: CompanyProps;
}

const JobListings = ({ isHome = false }: { isHome: boolean }) => {
  const [jobs, setJobs] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetcJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs"
      try {
        const resp = await fetch(apiUrl);
        const data = await resp.json();
        setJobs(data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetcJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
