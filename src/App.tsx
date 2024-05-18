import HomePage from "./pages/HomePage";
import Layout from "./layouts/MainLayout";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJob from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

interface Job {
  id: number;
  title: string;
  type: string;
  description: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}


const App = () => {
  const addJob = async (newJob: Job): Promise<void> => {
    const resp = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    if (!resp.ok) {
      throw new Error("Failed to add new job");
    }
  };

  const deleteJob = async (id: number): Promise<void> => {
    const resp = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    if (!resp.ok) {
      throw new Error("Failed to delete job");
    }
  };

  const updateJob = async (job: Job): Promise<void> => {
    const resp = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });

    if (!resp.ok) {
      throw new Error("Failed to update job");
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/job/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
