import React, { useState, useEffect } from 'react';
import './features.css'

const Sortingbtn = ({ filtered, setCurrentPage }) => {
  const { users, setFilteredUsers } = filtered;
  const [sortKey, setSortKey] = useState("");

  useEffect(() => {
    if (!sortKey) {
      setFilteredUsers(users);
      return;
    }

    let sorted = [...users];

    if (sortKey === "name") {
      sorted.sort((a, b) => a.first_name.localeCompare(b.first_name));
    }

    if (sortKey === "email") {
      sorted.sort((a, b) => a.email.localeCompare(b.email));
    }

    setFilteredUsers(sorted);
    setCurrentPage(1); 
  }, [sortKey, users]);

  return (
    <div>
      <select 
      className='select-box'
      value={sortKey} 
      onChange={(e) => setSortKey(e.target.value)}>
        <option value="">Sort</option>
        <option value="name">First Name</option>
        <option value="email">Email</option>
      </select>
    </div>
  );
};

export default Sortingbtn;
