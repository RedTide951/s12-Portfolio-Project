import React from "react";
import "./profile.css";
import { useAppContext } from "../contexts/AppContext";

export const Profile = () => {
  const { text } = useAppContext();
  return (
    <section className="wrapper py-2 md:py-8">
      <h2 className="heading">{text.profile}</h2>
      <div className="profile-container flex flex-col md:flex-row md:gap-4">
        <div className="stats-container flex-1">
          <div className="overflow-x-auto">
            <table className="table-sm text-left md:table-md">
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>{text.birthDate}</th>
                  <td>27 {text.birthMonth} 1996</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>{text.city}</th>
                  <td>İzmir</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>{text.education}</th>
                  <td>
                    {text.university2}
                    <br />
                    {text.university1}
                  </td>
                </tr>
                <tr>
                  <th>{text.preferredPosition}</th>
                  <td>Front End, UI</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="about-me-container flex-1">
          <h3 className="subheading text-primary">{text.aboutMe}</h3>
          <p>{text.aboutMeDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
