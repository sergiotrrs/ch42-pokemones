import "./styles.scss";
import * as bootstrap from "bootstrap";
import "./src/components/navbar/navbar-app";
import { navbarApp } from "./src/components/navbar/navbar-app.js";
import { domainName } from "./src/components/api/domainName.js";

document.querySelector("#navbar-app").innerHTML = navbarApp();
const url = `${domainName()}/api/v2/users`;

const getUsers = async (url) => {
  const loader = document.getElementById("loader");
  try {
    loader.style.display = "flex"; // Show loader
    const response = await fetch(url);
    const users = await response.json();

    const listPeople = users.map(
      ({ firstName, lastName, avatar, serialNumber, email }) => {
        return `
                <div class="col-lg-3 col-md-4 col-sm-5">
                    <div class="card m-2 rounded shadow-sm">
                        <div class="card-body"><strong>${firstName} ${lastName}</strong></div>
                        <img src="${avatar}" class="card-img-top" alt="${firstName}">
                        <div class="card-body">${serialNumber}</div>
                        <div class="card-body">${email}</div>
                    </div>                
                </div>
            `;
      }
    );

    document.querySelector("#list-container").innerHTML = listPeople.join("");
  } catch (exception) {
    console.error("Error", exception);
  } finally {
    loader.style.display = "none"; // Hide loader
  }
};

getUsers(url);
