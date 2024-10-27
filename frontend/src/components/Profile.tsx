import image from '../profile.png';
export const Profile = () => {
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
                <tr>
                  <td>HTML</td>
                  <td>
                    <div className="rating gap-1">
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>CSS</td>
                  <td>
                    <div className="rating gap-1">
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>React</td>
                  <td>
                    <div className="rating gap-1">
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-gray-400 w-5 h-5" />
                      <div className="mask mask-heart bg-gray-400 w-5 h-5" />
                      <div className="mask mask-heart bg-gray-400 w-5 h-5" />
                      <div className="mask mask-heart bg-gray-400 w-5 h-5" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Ruby</td>
                  <td>
                    <div className="rating gap-1">
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Ruby on Rails</td>
                  <td>
                    <div className="rating gap-1">
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>PostgreSQL</td>
                  <td>
                    <div className="rating gap-1">
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-orange-400 w-5 h-5" />
                      <div className="mask mask-heart bg-gray-400 w-5 h-5" />
                      <div className="mask mask-heart bg-gray-400 w-5 h-5" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
