import { useState, useEffect } from "react";
import axios from 'axios';

interface Work {
  id: number;
  name: string;
  jobs: string;
};

export const Works = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const getWorks = () => {
    axios.get('http://localhost:3001/api/works')
      .then(response => {
        setWorks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the works!', error);
      })
  };
  useEffect(() => {
    getWorks();
  }, []);

  return (
    <div className="py-20 flex flex-col justify-center items-center">
      <h1 className="mb-5 text-6xl text-center font-bold">Works</h1>
      <div className="flex flex-wrap gap-12 justify-center p-4 lg:px-32">
        {works.map(work => (
          <div className="card bg-base-100 w-80 shadow-xl" key={work.id}>
            <figure>
              <div className="mockup-window border-base-300 border w-full rounded-b-none">
                <div className="border-base-300 flex justify-center border-t px-4 py-16">{work.name}</div>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{work.name}</h2>
              <div className="mt-4 badge badge badge-secondary">担当</div>
              {work.jobs}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
