import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = props => {
  return (
    <div>
      Dashboard
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">mode_edit</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;