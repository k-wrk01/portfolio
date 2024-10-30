import image from '../profile.png';

import { useState, useEffect } from "react";
import axios from 'axios';

interface Skill {
  id: number;
  name: string;
  level: number;
};

export const Profile = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const getSkills = () => {
    axios.get('http://localhost:3001/api/skills')
      .then(response => {
        setSkills(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the skills!', error);
      })
  };
  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className="bg-base-200 min-h-screen py-20 flex flex-col justify-center items-center">
      <h1 className="mb-5 text-6xl text-center font-bold">Profile</h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-5">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt="" />
            <h1 className="text-5xl font-bold">
              名前
            </h1>
            <p>
              ○○システム構築、○○システム改修など様々な業務を担当。<br />
              現在は○○システムの開発に従事。
            </p>
          </div>
          <div>
            <div className="divider">
              <div className="badge badge-lg badge-neutral">skills</div>
            </div>
            <table className="table lg:table">
              <thead>
                <tr className="text-base">
                  <th>Name</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill) => (
                  <tr key={skill.id}>
                    <td>{skill.name}</td>
                    <td>
                      <div className="rating gap-1">
                        {[...Array(5)].map((_array, i) => {
                          if(skill.level > i) {
                            return  <div className="mask mask-heart bg-orange-400 w-5 h-5" key={i} />
                          } else {
                            return  <div className="mask mask-heart bg-gray-400 w-5 h-5" key={i} />
                          }
                        })}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
