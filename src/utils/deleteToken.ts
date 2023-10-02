/*
 * Функция для автоматического удаления "access" и "refresh" токенов из localStorage
 * при закрытии сайта.
 */
export const deleteTokenOnUnload = () => {
  // Функция, которая будет вызвана перед выгрузкой страницы.
  const handleUnload = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("userInfo");
  };

  const deleteToken = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("userInfo");
  };

  window.addEventListener("beforeunload", handleUnload);

  window.addEventListener("load", () => {
    const fiftyMinutesInMilliseconds = 50 * 60 * 1000;
    setTimeout(deleteToken, fiftyMinutesInMilliseconds);
  });
};
