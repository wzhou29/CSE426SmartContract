// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "../app/node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract LOLSkinMarketplace is ERC721 {
    struct Skin {
        string name;
        address owner;
        uint256 price;
        bool forSale;
    }

    modifier tokenExists(uint256 tokenId) {
        require(_exists(tokenId), "Token does not exist");
        _;
    }

    Skin[] public skins;
    mapping(uint256 => uint256) public skinIdToIndex;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function putSkinForSale(uint256 tokenId, uint256 price) external tokenExists(tokenId){
        require(msg.sender == ownerOf(tokenId), "Only owner can sell");
        Skin storage skin = skins[skinIdToIndex[tokenId]];
        skin.price = price;
        skin.forSale = true;
    }

    function buySkin(uint256 tokenId) external payable tokenExists(tokenId){
        Skin storage skin = skins[skinIdToIndex[tokenId]];
        require(skin.forSale, "Skin is not for sale");
        require(msg.value == skin.price, "Incorrect price");
        address payable oldOwner = payable(skin.owner);
        oldOwner.transfer(msg.value);
        safeTransferFrom(oldOwner, msg.sender, tokenId);
        skin.owner = msg.sender;
        skin.forSale = false;
        skin.price = 0;
    }

    function addSkin(string memory name) external {
        uint256 tokenId = skins.length;
        Skin memory skin = Skin(name, msg.sender, 0, false);
        skins.push(skin);
        skinIdToIndex[tokenId] = skins.length - 1;
        _safeMint(msg.sender, tokenId);
    }
}