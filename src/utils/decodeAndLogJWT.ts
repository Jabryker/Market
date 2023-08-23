import jwt_decode from "jwt-decode";

/*
 * Декодирует что нам присылает Google Auth
 *
 * @param {string} credential - JWT для декодирования
 */

export const decodeAndLogJWT = (credential: string) => {
  try {
    const decoded = jwt_decode(credential);
    console.log("Decoded JWT:", decoded);
  } catch (error) {
    console.log("Error decoding JWT:", error);
  }
};
