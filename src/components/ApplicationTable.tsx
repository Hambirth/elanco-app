import React, { useEffect, useState } from 'react';
import { fetchApplications } from '../api/elancoApi';

interface Application {
  id: number;
  name: string;
  computeResources: number;
}

const ApplicationTable: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    const fetchApplicationsData = async () => {
      const data = await fetchApplications();
      setApplications(data);
    };
    fetchApplicationsData();
  }, []);

  return (
    <div>
      <h1>Elanco Cloud Computing Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Compute Resources</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.name}</td>
              <td>{app.computeResources}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;
