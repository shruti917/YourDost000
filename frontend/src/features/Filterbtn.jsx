import React, { useState, useEffect } from 'react';
import './features.css'

const Filterbtn = ({ filtered, setCurrentPage }) => {
  const { users, setFilteredUsers } = filtered;
  const [filterDomain, setFilterDomain] = useState("");

  useEffect(() => {
    if (!filterDomain) {
      setFilteredUsers(users);
      setCurrentPage(1);   
      return;
    }

    const result = users.filter((u) =>
      u.email.endsWith(filterDomain)
    );

    setFilteredUsers(result);
    setCurrentPage(1);    
  }, [filterDomain, users]);

  return (
    <select
       className='select-box'
      value={filterDomain}
      onChange={(e) => setFilterDomain(e.target.value)}
    >
      <option value="">Filter by domain</option>
      <option value="reqres.in">reqres.in</option>
    </select>
  );
};

export default Filterbtn;
