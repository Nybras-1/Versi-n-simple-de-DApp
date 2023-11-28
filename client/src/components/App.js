import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

import CollabProject from '../contracts/CollabProject.json';

function App() {

  const [account, setAccount] = useState();
  const [contract, setContract] = useState();

  useEffect(() => {
    const loadBlockchain = async () => {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);

      const networkId = await web3.eth.net.getId();
      const collabProject = new web3.eth.Contract(
        CollabProject.abi, 
        CollabProject.networks[networkId].address
      );
      setContract(collabProject);
    }
    loadBlockchain();
  }, []);

  const getProject = async () => {
    // Call CollabProject contract `getProject` method
    const project = await contract.methods.getProject().call();
    return project;
  };

  const createProject = async () => {
    // Call CollabProject contract `createProject` method
    const projectName = "My New Project";
    const members = ["0x0000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000002"];
    const tasks = ["Task 1", "Task 2"];
    const project = await contract.methods.createProject(projectName, members, tasks).send({ from: account });
    return project;
  };

  return (
    <div>
      <h2>Your Account: {account}</h2>

      <button onClick={getProject}>Get Project</button>  

      <button onClick={createProject}>Create Project</button>

    </div>
  );

}

export default App;
