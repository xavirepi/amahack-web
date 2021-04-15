const { useContext } = require("react");
const { UserContext } = require("../contexts/UserContext");

export const useUser = () => useContext(UserContext); // Custom hook