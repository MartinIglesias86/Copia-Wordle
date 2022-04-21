//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract Criptdle {

    address public owner;

    string[] wordsTexts;

    struct word {
        string text;
        bool used;
    }

    mapping(string=>word) public words;

    modifier Owner(address _address) {
        require( _address == owner, "Usted no posee los permisos para realizar esta operacion." );
        _;
    }

    constructor() {
        //Set msg.sender as the owner of the contract
        owner = msg.sender;

    }
//Push a word to the array "words"
    function createWord(string memory _word) public Owner(msg.sender) {
        words[_word] = word(_word, false);
        wordsTexts.push(_word);

    }
//Return the array "words"
    function readWords() public view returns(string[] memory){

        return wordsTexts;

    }
//Set the word to "used"
    function useWord(string memory _word) public Owner(msg.sender) {
        words[_word] = word(_word, true);
    }

//Pick a random word from wordsTexts
    function getWord() public view returns(string memory) {
        uint random = block.timestamp % wordsTexts.length;
        return wordsTexts[random];
    }

//Returns if a word is already used
    function isUsed(string memory _word) public view returns(bool) {
        return words[_word].used;
    }

}