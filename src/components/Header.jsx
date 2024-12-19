import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // State to manage the dropdown toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown and prevent closing the mobile menu
  const handleDropdownToggle = (event) => {
    event.stopPropagation(); // Prevents the menu from closing
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header id="header" className="header d-flex align-items-center coffee-background sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <NavLink to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          {/* <h1 className="sitename">SoCo</h1> */}
          {/* <img src="/logo-soco-375x80.png" alt="" className="img-fluid"></img> */}
          <img src="/logo-soco-transparent.png" alt="" className="img-fluid"></img>
          {/* <img src="/logo-soco-465x80.png" alt="" className="img-fluid"></img>
          <img src="/logo-soco-4.png" alt="" className="img-fluid"></img>
          <svg role="img" width="120" height="50" preserveAspectRatio="xMidYMid meet" data-bbox="98.207 251.469 1720.543 584.137" viewBox="98.207 251.469 1720.543 584.137" xmlns="http://www.w3.org/2000/svg" data-type="color" aria-hidden="true">
            <g>
              <path d="M682 543.68c-1.26 77.78-26.64 146.26-79.69 203.71-34.45 37.3-76.76 62.13-125.42 76.26-24.26 7.04-49.02 10.92-74.29 11.76-58.76 1.96-114.01-10.73-164.97-40.31-53.98-31.33-92.08-76.72-116.32-133.98-10.95-25.87-18.19-52.8-21.15-80.71-9.49-89.32 15.56-167.77 75.96-234.29 40.76-44.9 91.27-73.9 150.4-87.65 16.68-3.88 33.59-6.21 50.71-6.8 74.74-2.58 141.47 19.71 199.73 66.17 45.79 36.52 75.8 84.08 92.61 140.04 8.4 27.95 12.41 56.56 12.43 85.8m-345.94-21.94c1.45-8.89 2.65-18.02 4.46-27.03 4.9-24.45 13.1-47.7 25.94-69.18 2.12-3.55 4.31-4.12 7.9-2.01 3.06 1.8 6.07 3.7 9.09 5.57 3.83 2.37 4.37 3.89 2.46 8.12-13.09 28.95-19.81 59.4-21.9 91.01-.33 4.95.12 8.86 5.34 10.76.26.1.47.33.71.49 27.7 19.1 48.53 44.29 64.8 73.46 3.17 5.68 6 11.54 9.06 17.45.78-.43 1.46-.76 2.1-1.15 13.64-8.42 24.82-19.4 33.35-32.93 14.53-23.02 20.63-47.87 14.43-74.82-5.99-26.04-22.04-45.22-43.76-59.6-26.58-17.59-53.74-34.32-80.64-51.43-10.69-6.8-21.85-13-31.95-20.6-24.01-18.05-33.17-43.02-30.02-72.25 3-27.86 18.55-47.3 43.63-59.33.62-.3 1.21-.67 1.82-1.01-2.39.03-4.66.31-6.9.76-4.98 1.01-9.99 1.94-14.9 3.21-69.55 17.94-124.08 57.25-162.81 117.41-36.08 56.05-51.19 118.19-48.41 184.72.95 22.82 4.65 45.21 10.9 67.18 13.57 47.65 38.42 88.51 74.08 122.82 31.71 30.52 68.44 52.78 110.24 66.59 5.05 1.67 10.18 3.09 15.27 4.63.12-.27.23-.54.35-.81-.91-.57-1.78-1.25-2.75-1.71-10.31-4.84-19.87-10.88-28.83-17.87-28.7-22.39-49.75-50.82-65.01-83.6-17.08-36.71-25.74-75.05-20.49-115.76 2.71-21 10.59-39.95 23.08-57.02 1.04-1.42 2.19-2.77 3.99-1.77 1.97 1.09 1.01 2.84.29 4.3-5.99 12.2-8.36 25.27-9.04 38.68-1.07 21 1.89 41.56 7.18 61.83 11.04 42.3 30.75 80.34 57.14 115 12.86 16.89 27.2 32.38 44.9 44.39 15.19 10.31 31.53 17.12 50.42 15.34 10.09-.95 19.3-4.12 26.85-11.22 11.17-10.51 18.37-23.36 21.78-38.21 3.66-15.9 3.2-32.03 1.54-48.14-.32-3.1.56-3.83 3.68-3.79 5.17.07 10.35.03 15.5-.34 2.62-.19 3.5.57 3.45 3.09-.32 17.93-3.2 35.39-10.5 51.85-11.48 25.88-29.96 44.3-57.52 52.73-.62.19-1.19.54-1.78.81 1.07.66 1.98.75 2.89.76 19.4.09 38.49-2.41 57.25-7.24 44.08-11.35 81.39-34.52 113.88-65.86 28.26-27.25 50.18-59.05 66.41-94.76 16.83-37.04 26.21-75.9 27.66-116.58.81-22.74-1.31-45.27-6.17-67.5-13.35-61.13-42.45-113.5-88.06-156.39-38.48-36.19-83.6-59.47-136.05-67.74-9.54-1.5-19.2-2.22-28.8-3.31-.06.29-.13.58-.19.87 1.03.39 2.04.81 3.08 1.16 17.49 6 31.1 16.84 40.7 32.65 5.05 8.31 8.09 17.36 9.5 26.96.22 1.49.56 3.31-1.61 3.7-2.29.41-2.55-1.24-2.85-3.01-.53-3.11-1.04-6.27-2.01-9.27-9.15-28.28-28.66-45.26-57.78-49.63-27.94-4.19-50.9 6.02-68.19 28.45-9.08 11.78-12.02 24.94-7.64 39.35 4.72 15.52 14.75 26.96 28.18 35.59 14.46 9.29 29 18.46 43.51 27.67 5.85 3.72 5.75 3.55 11.52-.43 26.94-18.57 55.56-23.55 85.96-9.45 21.5 9.97 38.51 25.76 53.72 43.62.61.71.87 1.9.9 2.89.2 6.05.16 12.1.45 18.14.48 9.78 1.06 19.55 1.8 29.31.36 4.78 1.2 9.52 1.69 14.29.07.73-.6 1.53-.93 2.29-.73-.58-1.48-1.13-2.16-1.75-.16-.15-.07-.56-.13-.84-4.94-23.93-12.56-46.87-25.4-67.83-9.1-14.85-20.13-27.97-35.74-36.38-16.74-9.02-33.82-10.11-50.88-.75-8.51 4.67-15.42 11.23-21.53 19.01 1.1.74 1.95 1.34 2.83 1.9 15.15 9.64 30.29 19.29 45.47 28.89 7.67 4.86 14.78 10.41 20.86 17.16 25.92 28.77 36.39 62.41 29.93 100.59-5.88 34.75-24.69 61.54-53.64 81.36-2.35 1.61-4.78 3.1-7.27 4.71 10.47 24.53 16.68 49.92 18.49 76.52 9.39-2.11 17.39-6.14 24.68-11.6 15.94-11.92 26.82-27.85 35.48-45.45 8.47-17.23 14.03-35.46 17.82-54.24.32-1.61.75-3.24 2.78-2.92 2.34.37 1.95 2.32 1.62 3.9-4.43 21.73-11.15 42.68-21.84 62.2-9 16.44-20.11 31.15-35.73 41.97-12.11 8.39-25.46 12.91-40.34 12.02-10.91-.66-21.11-3.98-30.64-9.2-23.56-12.9-41.09-31.93-54.91-54.64-1.07-1.76-2.3-2.51-4.26-2.84-40.54-6.91-71.61-27.75-92.61-63.25-7.37-12.46-11.72-25.81-11.15-40.5.63-16.1 9.92-27.52 25.63-31.24 9.14-2.16 18.35-1.72 27.45-.02 9.31 1.74 18.53 3.99 27.85 6.03Zm22.92 124.58c-1.26-2.71-2.14-4.59-3.02-6.47-14.73-31.54-20.48-64.94-20.46-99.5 0-1.79-.47-2.83-1.97-3.69-3.16-1.82-6.17-3.92-9.39-5.61-12.2-6.39-24.92-11.01-38.96-10.65-12.55.32-21.46 7.37-24.54 19.56-2.76 10.96-1.09 21.67 3.23 31.8 15.48 36.28 42.7 59.5 80.19 70.97 4.63 1.42 9.42 2.28 14.91 3.58Zm58.07-3.83c-13.81-29.39-30.15-56.11-52.26-79.05-.33.82-.4 1.49-.32 2.14 1.17 9.61 2.01 19.28 3.62 28.82 2.94 17.45 7.97 34.34 14.63 50.76.8 1.97 1.84 2.63 3.85 2.4 4.48-.52 9.01-.67 13.45-1.43 5.54-.94 11-2.32 17.04-3.64Zm-30.77 10.44c.07.24.13.72.33 1.14 5.26 11.44 11.23 22.47 19.05 32.4 8.14 10.33 17.65 18.93 30.26 23.51.92.33 1.88.53 3.23.89-4.35-22.6-11.19-43.8-20.07-63.67a26166 26166 0 0 0-32.8 5.73" fill="#4b4948" data-color="1"></path>
              <path d="M521.85 545.8c8.36-.93 16.82-2.1 23.64 6.67-.07-20.69 6.53-36.99 25.16-46.62-4.99 6.4-3.45 13.76-3.01 20.82.45 7.2-1.84 13.17-6.63 18.36-2.54 2.75-5.02 5.56-7.63 8.24-3.99 4.11-5.07 9.09-4.66 14.58.14 1.82.34 3.64.25 5.45-.09 1.84-.6 3.61-3.22 4.02.2-4.03.31-7.92.61-11.8.17-2.14-.58-3.05-2.72-3.42-6.88-1.19-12.04-5.14-16.33-10.47-1.6-1.98-3.47-3.74-5.45-5.84Z" fill="#4b4948" data-color="1"></path>
              <path d="M1238.67 522.94c-.56 28.94-7.62 57.08-27.37 80.83-35.69 42.93-97.42 49.75-141.59 15.43-29.71-23.09-44.74-53.78-45.01-91.52-.27-36.95 10.67-69.67 38.07-95.35 46.95-43.98 112.7-32.26 149.24 11.18 18.95 22.52 26.64 49.05 26.65 79.44Zm-35.02 1.35c-.57-8.96-.79-17.96-1.8-26.88-2.04-18-6.61-35.26-16.38-50.83-25.53-40.65-78.04-36.17-100.89-11.07-9.53 10.47-15.37 22.84-18.96 36.35-6.72 25.28-7.21 51-4.6 76.8 1.82 17.96 5.83 35.42 15.32 51.18 14.74 24.47 39.54 33.7 65.82 29.62 25.24-3.91 41.04-19.88 50.66-42.59 8.46-19.97 10.6-41.1 10.83-62.59Z" fill="#4b4948" data-color="1"></path>
              <path d="M1818.74 520.85c-.08 29.02-6.65 56.13-24.56 79.56-37.79 49.43-108.94 54.39-153.58 10.93-28.53-27.77-39.1-61.75-34.93-100.83 3.38-31.65 15.63-59.02 39.69-80.38 18.89-16.76 41.16-26.35 66.47-25.41 42.19 1.56 73.58 21.78 93.71 58.88 9.52 17.55 13.16 35.36 13.21 57.25Zm-107.19-104.41c-18.91.23-35.32 6.2-48.08 20.58-9.04 10.19-14.38 22.32-17.78 35.33-6.44 24.63-6.96 49.69-4.61 74.84 1.6 17.14 5.44 33.74 13.46 49.24 20.55 39.72 71.21 42.54 97.94 19.48 33.63-29.01 34.53-83.03 28.94-123.43-2.37-17.13-7.14-33.52-17.16-47.94-12.76-18.37-30.29-27.88-52.7-28.11Z" fill="#4b4948" data-color="1"></path>
              <path d="M853.76 404.07c26.99-.29 53.27 12.74 65.28 37.76 1.42 2.96 1.74 5.19-1.72 7.01-3.37 1.77-5.15.55-6.8-2.41-9.32-16.71-26.56-27.07-45.24-29.81-17.7-2.6-40.09.15-51.24 15.78-3.76 5.28-5.95 11.54-6.69 17.96-1.39 12.05 3.22 22.22 12.89 29.16 6.65 4.78 14.25 8.62 21.94 11.51 17.42 6.53 35.6 11.16 52.68 18.43 38.49 16.38 45.56 57.16 35.84 83.13-3.34 8.91-8.5 16.7-15.64 22.86-23.93 20.64-52.11 27.32-82.47 21.29-20.87-4.15-36.99-17.62-50.48-33.9-.63-.77-1.5-1.61-1.6-2.5-.41-3.73-1.79-7.54 2.48-7.6 7.39-.1 16.43 10.38 21.65 14.75 28.37 23.74 61.55 19.75 87.03 4.77 11.04-6.49 18.52-16.05 20.44-29.27 1.73-11.91-1.86-22.21-11.16-29.32-7.69-5.88-16.42-10.82-25.37-14.54-13.17-5.48-27.09-9.13-40.42-14.28-8.48-3.28-16.93-7.13-24.56-12.02-33.35-21.36-31.86-66.43-6.25-89.67 10.23-9.28 22.74-15.57 36.38-17.91 4.32-.74 8.68-1.13 13.03-1.18" fill="#4b4948" data-color="1"></path>
              <path d="M1326.11 528.18c0-33.26 11.91-66.62 35.04-90.47 35.51-36.63 96.17-44.43 133.66-6.96 1.85 1.85 3.67 3.71 5.45 5.62 3.29 3.53 6.3 7.32 9.46 10.97 1.81 2.1 2.95 4.24.19 6.39-2.65 2.06-5.56 3.47-8.45.54-1.38-1.4-2.29-3.26-3.41-4.91-23.87-35-77.33-42.54-108.45-12.71-14.68 14.07-21.23 34.83-24.66 54.34-9.17 52.2-.55 126.79 64.16 136.12 24.87 3.59 50.81-6.7 66.65-26.17 6.19-7.6 10.77-16.36 14.99-25.2 1.21-2.54 2.49-5.2 4.76-6.86s5.88-1.86 7.63.33c1.58 1.98 1.05 4.85.34 7.27-6.72 22.96-22.69 43.07-43.54 54.8-50.15 28.23-118.89 2.89-142.33-48.71-7.7-16.96-11.49-35.66-11.49-54.4Z" fill="#4b4948" data-color="1"></path>
              <path d="m821.49 689.3-19.06 51.71h7.82l3.9-11.35h20.87l3.9 11.35h7.82l-19.06-51.71zm-4.98 33.47 8.07-23.47 8.06 23.47z" fill="#4b4948" data-color="1"></path>
              <path d="M870.92 703.56c-2.23 0-4.26.6-6.1 1.81-1.46.96-2.7 2.27-3.72 3.88v-5.16h-7.26v36.92h7.26v-23.37c0-2.28.65-4.04 1.94-5.3q1.935-1.89 5.49-1.89c3.555 0 4.37.71 5.71 2.13s2.01 3.44 2.01 6.05V741h7.26v-22.41c0-4.79-1.1-8.49-3.29-11.11q-3.285-3.93-9.3-3.93Z" fill="#4b4948" data-color="1"></path>
              <path d="M902.75 693.36h-7.26v10.74h-3.81v6.54h3.81v20.77c0 3.15.68 5.57 2.04 7.25s3.56 2.53 6.6 2.53h4.2v-6.9h-3.49q-1.035 0-1.56-.75c-.525-.75-.53-1.19-.53-2.06v-20.84h5.58v-6.54h-5.58z" fill="#4b4948" data-color="1"></path>
              <path fill="#4b4948" d="M925.56 689.3v7.26h-7.26v-7.26z" data-color="1"></path>
              <path fill="#4b4948" d="M925.56 704.1v36.92h-7.26V704.1z" data-color="1"></path>
              <path fill="#4b4948" d="M960.48 719.04v6.9h-23.9v-6.9z" data-color="1"></path>
              <path d="M984.7 703.56c-2.8 0-5.34.47-7.63 1.4-2.29.94-4.13 2.25-5.53 3.93l5.3 3.63c1.11-.83 2.38-1.46 3.79-1.9q2.115-.66 4.29-.66c2.37 0 4.2.67 5.5 2.01 1.29 1.34 1.94 3.22 1.94 5.64v1.56h-10.17c-4.15 0-7.26.91-9.34 2.72s-3.11 4.56-3.11 8.23c0 3.87 1.13 6.73 3.4 8.61 2.26 1.87 5.66 2.81 10.19 2.81q2.31 0 4.14-.48c1.22-.32 2.31-.8 3.25-1.44.61-.41 1.15-.91 1.64-1.47v2.86h6.9v-23.72q0-6.54-3.81-10.14c-2.54-2.39-6.12-3.59-10.74-3.59Zm5.58 31.2c-1.38.59-3.44.89-6.19.89-2.51 0-4.4-.45-5.66-1.35s-1.88-2.29-1.88-4.16c0-1.73.47-3.02 1.42-3.86q1.425-1.26 4.23-1.26h10.14v6.97c0 1.26-.69 2.18-2.06 2.77" fill="#4b4948" data-color="1"></path>
              <path d="M1031.26 708.76c-1-1.48-2.21-2.69-3.65-3.59-1.81-1.14-3.81-1.71-5.99-1.71-3.94 0-6.99 1.31-9.16 3.93s-3.25 6.33-3.25 11.11v8.14c0 4.77 1.11 8.46 3.33 11.08s5.36 3.93 9.44 3.93c2.61 0 4.72-.66 6.35-1.97 1.28-1.04 2.25-2.19 2.93-3.44v4.74c0 2.8-.76 4.96-2.28 6.49s-3.66 2.29-6.44 2.29c-1.45 0-2.83-.36-4.14-1.07-1.32-.71-2.45-1.72-3.4-3.02l-4.91 4.45c1.21 1.87 2.91 3.33 5.1 4.36s4.68 1.55 7.45 1.55c5.05 0 8.96-1.4 11.72-4.21s4.14-6.78 4.14-11.9V704.1h-7.26v4.66Zm-.86 22.76c-.57 1.14-1.39 2.01-2.47 2.61s-2.39.91-3.93.91c-2.4 0-4.25-.73-5.57-2.19s-1.97-3.53-1.97-6.21v-8.04c0-2.7.66-4.8 1.97-6.29s3.17-2.24 5.57-2.24q2.31 0 3.93.87c1.62.87 1.9 1.43 2.47 2.54s.85 2.45.85 4.02v9.92c0 1.59-.28 2.95-.85 4.09Z" fill="#4b4948" data-color="1"></path>
              <path fill="#4b4948" d="M1056.8 704.1v36.92h-7.26V704.1z" data-color="1"></path>
              <path fill="#4b4948" d="M1056.8 689.3v7.26h-7.26v-7.26z" data-color="1"></path>
              <path d="M1084.89 703.56c-2.23 0-4.26.6-6.1 1.81-1.46.96-2.7 2.27-3.72 3.88v-5.16h-7.26v36.92h7.26v-23.37c0-2.28.65-4.04 1.94-5.3q1.935-1.89 5.49-1.89c3.555 0 4.37.71 5.71 2.13s2.01 3.44 2.01 6.05V741h7.26v-22.41c0-4.79-1.1-8.49-3.29-11.11q-3.285-3.93-9.3-3.93Z" fill="#4b4948" data-color="1"></path>
              <path d="M1129.49 708.76c-1-1.48-2.21-2.69-3.65-3.59-1.81-1.14-3.81-1.71-5.99-1.71-3.94 0-6.99 1.31-9.16 3.93s-3.25 6.33-3.25 11.11v8.14c0 4.77 1.11 8.46 3.33 11.08s5.36 3.93 9.44 3.93c2.61 0 4.72-.66 6.35-1.97 1.28-1.04 2.25-2.19 2.93-3.44v4.74c0 2.8-.76 4.96-2.28 6.49s-3.66 2.29-6.44 2.29c-1.45 0-2.83-.36-4.14-1.07-1.32-.71-2.45-1.72-3.4-3.02l-4.91 4.45c1.21 1.87 2.91 3.33 5.1 4.36s4.68 1.55 7.45 1.55c5.05 0 8.96-1.4 11.72-4.21s4.14-6.78 4.14-11.9V704.1h-7.26v4.66Zm-.85 22.76c-.57 1.14-1.39 2.01-2.47 2.61s-2.39.91-3.93.91c-2.4 0-4.25-.73-5.57-2.19s-1.97-3.53-1.97-6.21v-8.04c0-2.7.66-4.8 1.97-6.29s3.17-2.24 5.57-2.24q2.31 0 3.93.87c1.62.87 1.9 1.43 2.47 2.54s.85 2.45.85 4.02v9.92c0 1.59-.28 2.95-.85 4.09Z" fill="#4b4948" data-color="1"></path>
              <path d="M1201.51 729.28c1.78-3.98 2.67-8.81 2.67-14.48h-6.9c0 5-.76 9.11-2.25 12.36l-10.62-11.3c-1.87-1.97-3.31-4.07-4.32-6.29-1.01-2.23-1.51-4.39-1.51-6.47q0-3.42 1.74-5.28c1.16-1.25 2.79-1.87 4.87-1.87s3.7.58 4.84 1.72q1.71 1.725 1.71 4.89v.71h7.26v-.71c0-4.36-1.2-7.74-3.61-10.12s-5.8-3.58-10.19-3.58-7.82 1.24-10.24 3.72-3.63 5.98-3.63 10.51c0 3.15.69 6.2 2.08 9.12.21.44.45.86.68 1.29-1.68.73-3.12 1.74-4.31 3.03-2.34 2.54-3.5 5.93-3.5 10.17 0 4.72 1.33 8.37 4 10.96 2.67 2.58 6.43 3.88 11.29 3.88s8.87-1.05 12.23-3.15c.53-.33 1.03-.69 1.52-1.07l3.53 3.68h9.21l-8.18-8.7c.6-.95 1.15-1.95 1.64-3.04Zm-18.35 5.76c-3.13 0-5.55-.73-7.27-2.19s-2.58-3.5-2.58-6.14.81-4.75 2.44-6.22c.63-.57 1.37-1.03 2.2-1.38.39.45.77.9 1.19 1.34l11.67 12.18c-2.1 1.59-4.64 2.41-7.65 2.41" fill="#4b4948" data-color="1"></path>
              <path fill="#4b4948" d="M1264.46 712.1h-22.12v-22.8h-7.25v51.72h7.25V719h22.12v22.02h7.26V689.3h-7.26z" data-color="1"></path>
              <path d="M1297.97 703.56c-4.84 0-8.58 1.39-11.24 4.16s-3.98 6.69-3.98 11.74v6.01c0 5.1 1.33 9.05 3.98 11.86 2.66 2.81 6.4 4.21 11.24 4.21s8.58-1.39 11.24-4.18 3.98-6.72 3.98-11.79v-6.12c0-5.05-1.33-8.96-3.98-11.74-2.66-2.77-6.4-4.16-11.24-4.16Zm7.96 22.02c0 2.87-.69 5.1-2.08 6.69s-3.35 2.38-5.89 2.38-4.47-.79-5.87-2.38q-2.1-2.385-2.1-6.69v-6.12c0-2.87.7-5.09 2.1-6.65 1.4-1.57 3.35-2.35 5.87-2.35s4.5.78 5.89 2.35c1.39 1.56 2.08 3.78 2.08 6.65z" fill="#4b4948" data-color="1"></path>
              <path d="M1340.4 703.56c-2.18 0-4.18.62-5.99 1.85-1.44.98-2.65 2.27-3.65 3.84v-5.16h-7.26v36.92h7.26v-23.37c0-2.25.63-4.01 1.9-5.28s3.05-1.9 5.35-1.9c1.28 0 2.41.2 3.38.6s1.78 1 2.42 1.78l4.73-6.4c-1.02-.95-2.21-1.67-3.57-2.15-1.36-.49-2.89-.73-4.57-.73" fill="#4b4948" data-color="1"></path>
              <path d="M1393.36 703.56c-2.3 0-4.4.66-6.29 1.99-1.8 1.26-3.27 3.05-4.42 5.33a12.8 12.8 0 0 0-1.94-3.39c-2.13-2.62-5.15-3.93-9.03-3.93-2.23 0-4.26.6-6.1 1.81-1.46.96-2.7 2.27-3.72 3.88v-5.16h-7.26v36.92h7.26v-23.37c0-2.28.65-4.04 1.94-5.3s3.12-1.89 5.5-1.89 4.16.71 5.44 2.13 1.92 3.44 1.92 6.05V741h7.25v-22.7.04c0-2.51.62-4.46 1.86-5.83 1.23-1.38 2.98-2.06 5.23-2.06 2.47 0 4.37.71 5.71 2.13s2.01 3.44 2.01 6.05V741h7.26v-22.41c0-4.79-1.1-8.49-3.29-11.11q-3.285-3.93-9.3-3.93Z" fill="#4b4948" data-color="1"></path>
              <path d="M1431.13 703.56c-4.84 0-8.58 1.39-11.24 4.16s-3.98 6.69-3.98 11.74v6.01c0 5.1 1.33 9.05 3.98 11.86 2.66 2.81 6.4 4.21 11.24 4.21s8.58-1.39 11.24-4.18 3.98-6.72 3.98-11.79v-6.12c0-5.05-1.33-8.96-3.98-11.74-2.66-2.77-6.4-4.16-11.24-4.16Zm7.97 22.02c0 2.87-.69 5.1-2.08 6.69s-3.35 2.38-5.89 2.38-4.47-.79-5.87-2.38q-2.1-2.385-2.1-6.69v-6.12c0-2.87.7-5.09 2.1-6.65 1.4-1.57 3.35-2.35 5.87-2.35s4.5.78 5.89 2.35c1.39 1.56 2.08 3.78 2.08 6.65z" fill="#4b4948" data-color="1"></path>
              <path d="M1473.74 703.56c-2.23 0-4.26.6-6.1 1.81-1.46.96-2.7 2.27-3.72 3.88v-5.16h-7.26v36.92h7.26v-23.37c0-2.28.65-4.04 1.94-5.3s3.12-1.89 5.5-1.89 4.37.71 5.71 2.13 2.01 3.44 2.01 6.05V741h7.25v-22.41c0-4.79-1.1-8.49-3.29-11.11q-3.285-3.93-9.3-3.93Z" fill="#4b4948" data-color="1"></path>
              <path d="M1511.83 703.56c-4.93 0-8.75 1.51-11.47 4.52s-4.07 7.27-4.07 12.77v4.16c0 5.29 1.41 9.37 4.23 12.23 2.82 2.87 6.8 4.3 11.95 4.3 2.3 0 4.59-.48 6.86-1.44 2.28-.96 4.33-2.32 6.15-4.07l-4.77-4.77c-1.14 1.07-2.43 1.9-3.88 2.49s-2.9.89-4.37.89c-2.94 0-5.22-.82-6.85-2.45-1.57-1.58-2.37-3.82-2.43-6.72h23.25v-2.42c0-6.17-1.28-10.95-3.82-14.37-2.55-3.41-6.15-5.12-10.79-5.12Zm-8.62 16.08c.12-2.9.86-5.18 2.25-6.83 1.52-1.8 3.64-2.7 6.37-2.7 2.25 0 4.05.84 5.39 2.53 1.34 1.68 2.12 4.02 2.33 7.01h-16.34Z" fill="#4b4948" data-color="1"></path>
              <path d="M1564.18 693.36h-7.25v10.74h-3.81v6.54h3.81v20.77c0 3.15.68 5.57 2.04 7.25s3.56 2.53 6.6 2.53h4.2v-6.9h-3.49q-1.035 0-1.56-.75c-.36-.5-.53-1.19-.53-2.06v-20.84h5.58v-6.54h-5.58v-10.74Z" fill="#4b4948" data-color="1"></path>
              <path d="M1596.8 703.56c-2.23 0-4.26.6-6.1 1.8-1.46.95-2.7 2.23-3.72 3.81V689.3h-7.26v51.71h7.26v-23.47c0-2.25.65-4 1.94-5.23s3.12-1.85 5.5-1.85 4.37.71 5.71 2.13 2.01 3.44 2.01 6.05v22.37h7.25V718.6c0-4.79-1.1-8.49-3.29-11.11q-3.285-3.93-9.3-3.93" fill="#4b4948" data-color="1"></path>
              <path d="M1634.89 703.56c-4.93 0-8.75 1.51-11.47 4.52s-4.07 7.27-4.07 12.77v4.16c0 5.29 1.41 9.37 4.23 12.23 2.82 2.87 6.8 4.3 11.95 4.3 2.3 0 4.59-.48 6.86-1.44 2.28-.96 4.33-2.32 6.15-4.07l-4.77-4.77c-1.14 1.07-2.43 1.9-3.88 2.49s-2.9.89-4.37.89c-2.94 0-5.22-.82-6.85-2.45-1.57-1.58-2.37-3.82-2.43-6.72h23.25v-2.42c0-6.17-1.28-10.95-3.82-14.37-2.55-3.41-6.15-5.12-10.79-5.12Zm-8.62 16.08c.12-2.9.86-5.18 2.25-6.83 1.52-1.8 3.64-2.7 6.37-2.7 2.25 0 4.05.84 5.39 2.53 1.34 1.68 2.12 4.02 2.33 7.01h-16.34Z" fill="#4b4948" data-color="1"></path>
              <path d="M1676.36 703.56c-2.18 0-4.18.62-5.99 1.85-1.44.98-2.65 2.27-3.65 3.84v-5.16h-7.26v36.92h7.26v-23.37c0-2.25.63-4.01 1.9-5.28s3.05-1.9 5.35-1.9c1.28 0 2.41.2 3.38.6s1.78 1 2.42 1.78l4.73-6.4c-1.02-.95-2.21-1.67-3.57-2.15-1.36-.49-2.89-.73-4.57-.73" fill="#4b4948" data-color="1"></path>
              <path d="M1703.74 703.56c-2.8 0-5.34.47-7.63 1.4-2.29.94-4.13 2.25-5.53 3.93l5.3 3.63c1.11-.83 2.38-1.46 3.79-1.9q2.115-.66 4.29-.66 3.555 0 5.49 2.01c1.29 1.34 1.94 3.22 1.94 5.64v1.56h-10.17c-4.15 0-7.26.91-9.34 2.72s-3.11 4.56-3.11 8.23c0 3.87 1.13 6.73 3.4 8.61s5.66 2.81 10.19 2.81q2.31 0 4.14-.48c1.22-.32 2.31-.8 3.25-1.44.61-.41 1.15-.91 1.64-1.47v2.86h6.9v-23.72q0-6.54-3.81-10.14c-2.54-2.39-6.12-3.59-10.74-3.59m5.59 31.2c-1.38.59-3.44.89-6.19.89-2.51 0-4.4-.45-5.66-1.35s-1.88-2.29-1.88-4.16c0-1.73.47-3.02 1.42-3.86q1.425-1.26 4.23-1.26h10.14v6.97c0 1.26-.69 2.18-2.06 2.77" fill="#4b4948" data-color="1"></path>
              <path d="M1746.21 703.56c-2.21 0-4.21.59-6.01 1.76-1.43.93-2.63 2.18-3.63 3.73v-4.96h-7.26v51.93h7.26v-19.77c.79 1.52 1.87 2.74 3.27 3.65 1.71 1.1 3.71 1.65 6.01 1.65 4.05 0 7.2-1.3 9.43-3.91s3.34-6.27 3.34-10.99v-8.04c0-4.79-1.08-8.49-3.24-11.11q-3.24-3.93-9.18-3.93Zm5.16 23.09c0 2.66-.66 4.71-1.97 6.17-1.32 1.46-3.17 2.19-5.57 2.19-1.54 0-2.85-.3-3.93-.89s-1.9-1.45-2.47-2.56-.85-2.47-.85-4.05v-10.06c0-1.57.28-2.89.85-3.98s1.39-1.92 2.47-2.49 2.39-.85 3.93-.85c2.39 0 4.25.75 5.57 2.24s1.97 3.59 1.97 6.29v8Z" fill="#4b4948" data-color="1"></path>
              <path d="m1788.89 704.1-8.6 26.27-9.29-26.27h-7.4l13.39 36.33-1.76 5.39c-.59 1.33-1.29 2.26-2.08 2.81-.79.54-1.87.82-3.22.82h-1.46v6.97h1.46c2.89 0 5.17-.49 6.83-1.48q2.49-1.47 3.81-5.28l15.72-45.56z" fill="#4b4948" data-color="1"></path>
            </g>
          </svg> */}
        </NavLink>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
            <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
            {/* Dropdown menu */}
            <li className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
              <a href="#" onClick={handleDropdownToggle}>
                <span>Services</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              {/* Toggle visibility based on state */}
              <ul style={{ display: isDropdownOpen ? 'block' : 'none' }}>
                <li><NavLink to="/tlsr" activeclassname="active">TLSR</NavLink></li>
                <li><NavLink to="/facial" activeclassname="active">Facial Aesthetic Design</NavLink></li>
                <li><NavLink to="/wellness" activeclassname="active">Wellness Program</NavLink></li>
                <li><NavLink to="/k-advanced" activeclassname="active">K-advanced</NavLink></li>
                <li><NavLink to="/other-treatments" activeclassname="active">Special Treatments</NavLink></li>
              </ul>
            </li>
            {/* <li><NavLink to="/departments" activeclassname="active">Departments</NavLink></li> */}
            <li><NavLink to="/promos" activeclassname="active">Promos</NavLink></li>
            {/* <li><NavLink to="/gallery" activeclassname="active">Gallery</NavLink></li> */}
            <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
            {/* <li><NavLink to="/appointment" activeclassname="active cta-btn">Make an appointment</NavLink></li> */}
          </ul>

          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <div className="align-items-center work-hour d-none d-sm-block">
          <i className="bi bi-clock me-1"></i> Wednesday - Saturday, 10AM to 6PM
        </div>
        <div className="header-social-links d-none d-sm-block">
          {/* <a href="" className="twitter"><i className="bi bi-twitter-x"></i></a> */}
          <a href="https://www.facebook.com/socoaghc/" className="facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/socoaghc/" className="Instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
          {/* <a href="" className="google"><i className="bi bi-google"></i></a> */}
        </div>

      </div>
    </header>
  );
}

export default Header;
