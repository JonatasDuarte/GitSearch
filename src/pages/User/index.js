import React, { useState, useCallback } from "react";

import { useParams } from "react-router-dom";

import api from "../";

export default function User() {
  const { username } = useParams();

  return <div>Hello {username}</div>;
}

// /users/:username/repos
/*
  [
     {
         "html_url": "https://github.com/jarthursantos/base-react-electron",
         "name": "base-react-electron",
         "description": "Base code to produce a Electron application using ReactJS to make the UI",
         "language": "JavaScript",
         "stargazers_count": 0,
         "forks_count": 0,
     },
  ]
*/

// git remote add origin https://github.com/jarthursantos/jarthursantostest.git
// git push -u origin master
// git push