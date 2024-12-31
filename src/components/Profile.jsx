import React from "react";
import "./profile.css";
import { useAppContext } from "../contexts/AppContext";

export const Profile = () => {
  const { language } = useAppContext();
  return (
    <section className="wrapper py-2 md:py-8">
      <h2 className="heading">{language.profile}</h2>
      <div className="profile-container flex flex-col md:flex-row md:gap-4">
        <div className="stats-container flex-1">
          <h3 className="subheading text-primary hidden md:block">
            {language.profile}
          </h3>
          <div className="overflow-x-auto">
            <table className="table-sm text-left md:table-md">
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>{language.birthDate}</th>
                  <td>27 {language.birthMonth} 1996</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>{language.city}</th>
                  <td>İzmir</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>{language.education}</th>
                  <td>{language.university}</td>
                </tr>
                <tr>
                  <th>{language.preferredPosition}</th>
                  <td>Front End, UI</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="about-me-container flex-1">
          <h3 className="subheading text-primary">{text.aboutMe}</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, animi
            at. Explicabo labore tenetur quam quo quia ratione culpa laborum
            sunt doloribus repellat laudantium quisquam non vero, accusamus
            nulla perferendis? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Numquam, voluptate. Molestias voluptate magni
            tempore magnam nobis atque fugiat, consequatur rem reprehenderit
            libero, incidunt accusamus a? Ad velit labore nam quaerat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
