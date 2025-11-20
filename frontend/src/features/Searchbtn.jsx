import React, { useState, useEffect } from 'react';
import './features.css'

const Searchbtn = ({ filtered, setCurrentPage }) => {
  const { users, setFilteredUsers } = filtered;
  const [search, setSearch] = useState("");

  useEffect(() => {
    const q = (search || "").trim().toLowerCase();

    if (!q) {
      setFilteredUsers(users || []);
      setCurrentPage(1);         
      return;
    }

    const result = (users || []).filter((u) => {
      const fullName = `${u.first_name ?? ""} ${u.last_name ?? ""}`.toLowerCase();
      const email = (u.email ?? "").toLowerCase();
  
      return (
        fullName.includes(q) ||
        (u.first_name || "").toLowerCase().includes(q) ||
        (u.last_name || "").toLowerCase().includes(q) ||
        email.includes(q)
      );
    });

    setFilteredUsers(result);
    setCurrentPage(1); 
  }, [search, users, setFilteredUsers, setCurrentPage]);

  return (
    <input
      type="text"
      placeholder="Search by name or email"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Searchbtn;
