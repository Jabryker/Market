import { AxiosError } from "axios";
import { displayErrorToast } from "../../components/atoms/";

/**
 * Обрабатывает ошибки, связанные с запросами к серверу (используя библиотеку Axios).
 * Выводит информативное уведомление об ошибке в зависимости от статуса ответа сервера или других ошибок.
 *
 * @param {AxiosError} error - Объект ошибки, полученный от Axios.
 */

const handleServerError = (error: AxiosError) => {
  if (error.response) {
    if (error.response.status === 400) {
      displayErrorToast("Invalid input. Please check your data.");
    } else if (error.response.status === 401) {
      displayErrorToast("Invalid credentials. Please check your username/email and password.");
    } else if (error.response.status === 404) {
      displayErrorToast("Resource not found. Please try again later.");
    } else {
      displayErrorToast("An error occurred. Please try again later.");
    }
  } else if (error.request) {
    displayErrorToast("No response received from the server. Please check your connection.");
  } else {
    displayErrorToast("An error occurred. Please try again later.");
  }
};

export default handleServerError;
