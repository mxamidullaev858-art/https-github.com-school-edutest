import React from 'react';

const SchoolsAdmin = () => {
  const mockSchools = [
    { id: 1, name: "1-sonli maktab", district: "Toshkent", students: 1200, teachers: 85, status: "Faol" },
    { id: 2, name: "15-sonli maktab", district: "Samarqand", students: 850, teachers: 42, status: "Faol" },
    { id: 3, name: "IDUM 2-sonli", district: "Buxoro", students: 500, teachers: 30, status: "Kutilmoqda" },
    { id: 4, name: "Prezident maktabi", district: "Andijon", students: 240, teachers: 50, status: "Faol" },
    { id: 5, name: "5-maktab", district: "Namangan", students: 980, teachers: 60, status: "Faol" },
  ];

  return (
    <div>
      <h1 className="admin-page-title">Maktablar boshqaruvi</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Jami Maktablar</h3>
          <div className="value">142</div>
        </div>
        <div className="stat-card">
          <h3>Yangi Sorovlar</h3>
          <div className="value">12</div>
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Maktab Nomi</th>
              <th>Viloyat/Tuman</th>
              <th>Oquvchilar</th>
              <th>Oqituvchilar</th>
              <th>Holat</th>
              <th>Amallar</th>
            </tr>
          </thead>
          <tbody>
            {mockSchools.map((school) => (
              <tr key={school.id}>
                <td>#{school.id + 100}</td>
                <td style={{ fontWeight: '600' }}>{school.name}</td>
                <td>{school.district}</td>
                <td>{school.students}</td>
                <td>{school.teachers}</td>
                <td>
                  <span style={{ 
                    color: school.status === 'Faol' ? '#4ade80' : '#facc15',
                    fontSize: '0.85rem'
                  }}>
                    {school.status}
                  </span>
                </td>
                <td>
                  <button style={{ 
                    padding: '6px 12px', 
                    background: 'rgba(59, 130, 246, 0.1)', 
                    border: '1px solid #3b82f6', 
                    borderRadius: '6px', 
                    color: '#3b82f6', 
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}>
                    Korish
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchoolsAdmin;
