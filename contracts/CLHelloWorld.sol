// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.17;

contract CLHelloWorld {

  event UpdateMessage(string oldMessage, string newMessage);

  string public message;

  constructor(string memory initMessage) {
    message = initMessage;
  }

  function update(string memory newMessage) public {
    string memory oldMessage = message;
    message = newMessage;
    emit UpdateMessage(oldMessage, newMessage);
  }
}