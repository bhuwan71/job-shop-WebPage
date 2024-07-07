import React, { useEffect, useState } from "react";
import api from "@/app/api"; // Adjust the import path as necessary
import JobCard from "./jobCard";

const Container = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/jobs");
        setData(response.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  /// call this api in in page  instead of container component it causing issue api called twice
  // change the logic same as jobPage  try to use api call through redux sagas 
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Job Lists</h1>
      <ul>
        {data?.map((item) => (
          <JobCard key={item} />
        ))}
      </ul>
    </div>
  );
};

export default Container;
