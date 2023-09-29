/*
 * Функция для автоматического удаления "access" и "refresh" токенов из localStorage
 * через указанный промежуток времени (в данном случае 50 минут).
 */
export const deleteToken = () => {
  const TIMEOUT_DURATION_MS = 50 * 60 * 1000; // 50 минут в миллисекундах
  
  setTimeout(() => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }, TIMEOUT_DURATION_MS);
};
