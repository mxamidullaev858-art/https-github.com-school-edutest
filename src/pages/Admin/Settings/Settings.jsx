import React from 'react';

const Settings = () => (
   <div>
    <h1 className="admin-page-title">Umumiy Sozlamalar</h1>
    <div className="stat-card" style={{ maxWidth: '400px' }}>
       <h3>Sayt Nomi</h3>
       <input type="text" value="EduTest" style={{ width: '100%', padding: '8px', marginTop: '5px', background: '#334155', border: 'none', color: '#fff', borderRadius: '4px' }} readOnly />
       <h3 style={{ marginTop: '15px' }}>Admin Email</h3>
       <input type="text" value="admin@edutest.uz" style={{ width: '100%', padding: '8px', marginTop: '5px', background: '#334155', border: 'none', color: '#fff', borderRadius: '4px' }} readOnly />
    </div>
  </div>
);

export default Settings;
