import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}`,
          {},
          {
            withCredentials: true,
          }
        );

        if (!data.status) {
          window.location.href = `${process.env.REACT_APP_LANDING_URL}/login`;
          return;
        }

        // Store username returned by backend
        setUsername(data.user);

        setLoading(false);
      } catch (error) {
        console.log(error);
        window.location.href =`${process.env.REACT_APP_LANDING_URL}/login`;
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        Loading Dashboard...
      </div>
    );
  }

  return (
    <>
      <TopBar username={username} />
      <Dashboard />
    </>
  );
};

export default Home;