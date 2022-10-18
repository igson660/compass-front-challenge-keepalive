export const $selector = document.querySelector.bind(document);

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
  const CPath = window.location.href;
  let user = $selector(".input-user").value;
  let password = $selector(".input-password").value;

  if (user === "admin" && password === "admin") {
    localStorage.setItem("user", JSON.stringify({ user, password }));
    window.location.href = CPath.replace("index.html", "pages/home.html");
    return;
  }
  $selector(".message-error").style.display = "block";
  $selector(".input-user").classList.add("input-error");
  $selector(".input-password").classList.add("input-error");
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
  return `${data.getDate()} de ${
    fullMonths[data.getMonth()]
  } de ${data.getFullYear()}`;
};

export const getHour = () => {
  const data = new Date();
  return `${data.getHours()}:${
    data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()
  }`;
};

export const insertContent = (
  childEl,
  contentEl,
  parentEl,
  rPrecious,
  addClass
) => {
  const childTag = document.createElement(`${childEl}`);
  const content = document.createTextNode(`${contentEl}`);
  const parentTag = $selector(`${parentEl}`);

  rPrecious ? (parentTag.innerHTML = "") : false;
  addClass ? childTag.classList.add(addClass) : false;
  childTag.appendChild(content);
  parentTag.appendChild(childTag);
};

export const departureConfirmation = (name) => {
  const confirmation = confirm("Deseja continuar logado?");
  const CPath = window.location.href;

  if (name && confirmation) return none;
  if (confirmation) return window.location.reload();
  localStorage.removeItem("user");
  window.location.href = CPath.replace("pages/home.html", "index.html");
};
