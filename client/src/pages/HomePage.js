import React, { useEffect, useState } from "react";
import { Footer, Header, Home,Sidebar,Temperature,Datepicker } from "../components";
import store from "../redux/store";
import { loadUser } from "../redux/auth/authSlice";
function HomePage(props) {
  useEffect(() => store.dispatch(loadUser()), []);
  return (
    <div className="flex h-screen overflow-hidden">
  
    </div>
  );
}

export default HomePage;
