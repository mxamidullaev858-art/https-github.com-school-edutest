import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="admin-page-title">Boshqaruv Paneli</h1>
      
      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Jami Oquvchilar</h3>
          <div className="value">10,482</div>
        </div>
        <div className="stat-card">
          <h3>Jami Oqituvchilar</h3>
          <div className="value">482</div>
        </div>
        <div className="stat-card">
          <h3>Faol Darslar</h3>
          <div className="value">1,204</div>
        </div>
        <div className="stat-card">
          <h3>Daromad (Oyiga)</h3>
          <div className="value">$24,500</div>
        </div>
      </div>

      {/* Recent Activity / Chart Placeholder */}
      <h2 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Songgi Royxatdan Otganlar</h2>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Ism</th>
              <th>Vazifasi</th>
              <th>Sana</th>
              <th>Holat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ali Valiyev</td>
              <td>Oquvchi</td>
              <td>24-okt, 2026</td>
              <td style={{ color: '#4ade80' }}>Faol</td>
            </tr>
            <tr>
              <td>Malika Karimova</td>
              <td>Oquvchi</td>
              <td>24-okt, 2026</td>
              <td style={{ color: '#facc15' }}>Kutilmoqda</td>
            </tr>
            <tr>
              <td>Jamshid Toshmatov</td>
              <td>Oqituvchi</td>
              <td>23-okt, 2026</td>
              <td style={{ color: '#4ade80' }}>Faol</td>
            </tr>
            <tr>
              <td>Sevara Rahimova</td>
              <td>Oquvchi</td>
              <td>22-okt, 2026</td>
              <td style={{ color: '#f87171' }}>Nofaol</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
