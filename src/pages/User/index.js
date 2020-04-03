import React, { useState, useCallback } from "react";

import { useParams } from "react-router-dom";

import api from "../../services/api";

import { Container } from "./styles"

import {MdStar, MdCallSplit} from "react-icons"

export default function User() {
  const { username } = useParams();

  const handleShowRepo = useCallback(



  )

  return;
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

// git add .
// git commit -m "initial commit"
// git remote add origin https://github.com/jarthursantos/jarthursantostest.git
// git push -u origin master
// git push