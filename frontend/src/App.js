import React, { useEffect, useState } from "react";
import UserTable from "./components/Components";

import { data as userData } from "./data/Data";

const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

useEffect(() => {
  const fetchData = async () => {
    /*The API endpoint I was trying to fetch from occasionally returned an error saying ‘Missing API key’.Since the free API key
     was not reliable and sometimes stopped working, I decided to store the sample JSON response locally inside a Data.js file. 
     This allowed my project to work consistently without depending on an unstable API. I structured my Data.js file 
     to export the same JSON object the API normally returns, and then imported it inside my component.
      This ensures the UI logic remains the same, only the data source changes  */

      // Code for fetching data from API
    //const res = await fetch("https://reqres.in/api/users"); 
    // const result = await res.json();

    setUsers(userData.data);
    setTotalPages(userData.total_pages);
  };

  fetchData();
}, [page]);


  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>

      <UserTable users={users} />

  
    </div>
  );
};

export default App;
