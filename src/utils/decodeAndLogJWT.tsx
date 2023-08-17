import jwt_decode from "jwt-decode";

export const decodeAndLogJWT = (credential: string) => {
  try {
    const decoded = jwt_decode(credential);
    console.log("Decoded JWT:", decoded);
  } catch (error) {
    console.log("Error decoding JWT:", error);
  }
};

