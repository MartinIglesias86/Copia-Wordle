//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract Criptdle {

    string[] words;

    constructor() {

        

    }
//Push a word to the array "words"
    function createWord(string memory _word) public {

        words.push(_word);

    }
//Return the array "words"
    function readWords() public view returns(string[] memory){

        return words;

    }

}