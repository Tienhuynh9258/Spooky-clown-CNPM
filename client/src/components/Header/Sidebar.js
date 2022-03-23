import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import ana_avatar from "../../assets/img/avatar_1.png"
import logo from "../../assets/img/logo.png"
import SidebarLinkGroup from "./SidebarLinkGroup";
import {render} from 'react-dom';
import AvatarUploader from './supAvatar';
import { useDispatch, useSelector } from 'react-redux';
import store from "../../redux/store";
import { loadUser } from "../../redux/auth/authSlice";
import { authActions } from '../../redux/auth/authSlice';
function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const dispatch = useDispatch();
  useEffect(() => store.dispatch(loadUser()), []);
  const { user,isAuthenticated } = useSelector((state) => state.auth);
  return (
    <aside class="w-64 border-r-2	" aria-label="Sidebar">
      <div class="overflow-y-auto h-screen py-4 px-3  rounded dark:bg-gray-800">
        <ul class="space-y-2">
          <li>
            <a href="/">
              <img src={logo}
                style={{marginLeft:'60px'}}
                alt=""
                width="80"
                height="60" />
            </a>
            <span className="ml-3 font-extrabold text-2xl	" style={{color:"#7DB500"}}>
                <span style={{color:'#5A8200'}}>Smart </span>
                Garden
              </span>
              <br/>
              <hr
        style={{
            marginTop:'15px',
            color: 'lightgray',
            height: 5
        }}
    />
          </li>
          <li>
            <figure class="md:flex items-center	">
              <AvatarUploader class="w-16 h-16 rounded-full"
              size={70}
              uploadURL="http://127.0.0.1:5000/api/auth/upload"
              // fileType={ ("image/png") || ("image/jpg") }
              name={isAuthenticated && user? user.username : 'Anonymous'}
              customHeaders={{'Content-Type': 'application/json'}}
              defaultImg={(user)?((user.avatar_img!='')?user.avatar_img:ana_avatar):ana_avatar}
              // onFinished={(false,()=>{dispatch(authActions.changeImage(user.avatar_img))})}
              onFinished={(false,()=>{
                setTimeout(() => {
                  window.location.reload(false);
                }, 3000)
                // dispatch(authActions.changeImage(user.avatar_img)),
                })}
              />
              <div class="pt-6 md:p-6 text-center md:text-left space-y-4">
                <figcaption class="font-medium">
                  <div class="text-sky-500 dark:text-sky-400 font-bold">
                     { isAuthenticated && user? user.username : 'Anonymous'} 
                  </div>
                  <div class="text-slate-700 dark:text-slate-500">
                  { isAuthenticated && user? user.email : 'UnknownEmail'} 
                  </div>
                </figcaption>
              </div>
            </figure>
          </li>
          <li>
            <p className="text-lg font-bold">Thao tác</p>
            <a
              href="/control"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">
                Điều khiển tự động
              </span>
            </a>
          </li>
          <li>
            <p className="text-lg font-bold">Thông số môi trường</p>
            <Link
              to="/temperature"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Nhiệt độ</span>
            </Link>
          </li>
          <li>
            <Link
              to="/moisture"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Độ ẩm đất</span>
            </Link>
          </li>
          <li>
            <Link
              to="/sound"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">
                Cường độ âm thanh
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/light"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">
                Cường độ ánh sáng
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
