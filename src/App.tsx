import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import JobListing from "./components/JobListings";
import NavBar from "./components/NavBar";
import ViewAllJobs from "./components/ViewAllJobs";

const heading = {
  title: "Become a React Dev",
  subtitle: "Find the React job that fits your skill set",
};

const App = () => {
  return (
    <>
      <NavBar />
      <Hero title={heading.title} subtitle={heading.subtitle} />
      <HomeCard />
      <JobListing />
      <ViewAllJobs />
    </>
  );
};

export default App;
