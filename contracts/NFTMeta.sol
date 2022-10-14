// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// can be seen in <https://testnets.opensea.io/assets/goerli/TOKEN_ADDR_FROM_ETHERSCAN/TOKEN_ID>
// e.g., https://testnets.opensea.io/assets/goerli/0x48f40834a7ec075d523114d569dffe04e796072e/1
contract NFTMeta is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private currentTokenId;

    string public baseTokenURI;
    
    constructor() ERC721("NFTTutorial", "NFT") {
      baseTokenURI = "https://storage.googleapis.com/vapps-public/other-nft/";
    }

    // this is what does the magic, it tells ERC721 the URL prefix for our NFT
    // token ids which are appended to the end
    function _baseURI() internal view virtual override returns (string memory) {
      return baseTokenURI;
    }
    
    function mintTo(address recipient)
        public
        returns (uint256)
    {
        currentTokenId.increment();
        uint256 newItemId = currentTokenId.current();
        _safeMint(recipient, newItemId);
        return newItemId;
    }
}