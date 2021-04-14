const { useContext } = require("react");
const { UserContext } = require("../contexts/UserContext");

export const useUserContext = () => useContext(UserContext);