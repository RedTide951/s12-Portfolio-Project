import React, { Component } from "react";
import "./profile.css";

export class Profile extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2 className="heading">Profile</h2>
        <div className="profile-container">
          <div className="stats-container">
            <h3 className="subheading text-primary">Profile</h3>
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>Doğum Tarihi</th>
                    <td>27 Mayıs 1996</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>İkamet Şehri</th>
                    <td>İzmir</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>Eğitim Durumu</th>
                    <td>Anadolu Üniversitesi - Programlama</td>
                  </tr>
                  <tr>
                    <th>Tercih Ettiği Rol</th>
                    <td>Front End, UI</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="about-me-container">
            <h3 className="subheading text-primary">About Me</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
              animi at. Explicabo labore tenetur quam quo quia ratione culpa
              laborum sunt doloribus repellat laudantium quisquam non vero,
              accusamus nulla perferendis? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Numquam, voluptate. Molestias
              voluptate magni tempore magnam nobis atque fugiat, consequatur rem
              reprehenderit libero, incidunt accusamus a? Ad velit labore nam
              quaerat.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
