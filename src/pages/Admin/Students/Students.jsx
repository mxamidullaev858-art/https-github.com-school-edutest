import React, { useEffect, useState } from 'react';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users');
        const data = await res.json();
        setStudents(data);
      } catch (err) {
        console.error('Students fetch error:', err);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h1 className="admin-page-title">Oquvchilar</h1>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ism</th>
              <th>Familiya</th>
              <th>Email (Google)</th>
              <th>Sinf</th>
              <th>Maktab</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={student.id || index}>
                  <td>#{student.id ? student.id.toString().slice(-4) : '????'}</td>
                  <td>{student.firstName || "Ism kiritilmagan"}</td>
                  <td>{student.lastName || ''}</td>
                  <td style={{ color: '#3b82f6', fontSize: '0.85rem' }}>{student.email || "Nomalum"}</td>
                  <td>{student.grade || '?'}-Sinf</td>
                  <td>{student.school || "Maktab aniqlanmagan"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', color: '#94a3b8' }}>Hozircha oquvchilar yoq</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
