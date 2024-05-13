import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skill set"
      />
      <HomeCard />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
