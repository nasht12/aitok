pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721Enumerable, Ownable {
using Strings for uint256;
uint256 private _tokenIdCounter;

constructor(string memory name, string memory symbol) ERC721(name, symbol) {
    _tokenIdCounter = 1;
}

function lazyMint(address to, string memory tokenURI) external onlyOwner returns (uint256) {
    uint256 tokenId = _tokenIdCounter;
    _safeMint(to, tokenId);
    _setTokenURI(tokenId, tokenURI);
    _tokenIdCounter++;
    return tokenId;
}
}