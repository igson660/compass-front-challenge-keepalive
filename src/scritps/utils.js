import { $selector } from "./script_login.js";

export const varifyContentInput = () => {
  const user = $selector(".input-user");
  const password = $selector(".input-password");
  user.value
    ? $selector(".user").classList.add("selected")
    : $selector(".user").classList.remove("selected");
  password.value
    ? $selector(".password").classList.add("selected")
    : $selector(".password").classList.remove("selected");
};

export const toLogin = () => {
  let user = $selector(".input-user").value;
  let password = $selector(".input-password").value;
  const spanError = $selector(".message-error");
  const data = { user, password };

  if (user === "admin" && password === "admin") {
    const path = window.location.href.replace("index.html", "pages/home.html");
    localStorage.setItem("user", JSON.stringify(data));
    user = "";
    password = "";
    window.location.href = path;
    return;
  }
  spanError.style.display = "block";
};

export const getDate = () => {
  const fullMonths = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const data = new Date();
  return `${data.getDay()} de ${
    fullMonths[data.getMonth()]
  } de ${data.getFullYear()}`;
};

export const getHour = () => {
  const data = new Date();
  return `${data.getHours()}:${
    data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()
  }`;
};
