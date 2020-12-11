import React, { useState } from "react";
import { authService } from "../fbase";
import AppRouter from "./Router";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(authService.auth());
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      sd
      <footer>&copy; Nwitter{new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
