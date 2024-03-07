// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@ai-protocol/royal-erc721/contracts/token/RoyalERC721.sol";

/**
 * @title AI Protocol NFT
 *
 * @notice AI Protocol NFT is an ERC721 token used as a target NFT for iNFT protocol
 *
 * @dev AI Protocol NFT is a Tiny ERC721, it supports minting and burning,
 *      its token ID space is limited to 32 bits
 */
contract ALINFT is RoyalERC721 {
	/**
	 * @inheritdoc TinyERC721
	 */
	uint256 public constant override TOKEN_UID = 0x275ee64af649fe998ccbaec4f443dc216eef3bab6f11080eeeedfbdd303c59a6;

	/**
	 * @dev Constructs/deploys AI Protocol NFT instance
	 *      with the name and symbol defined during the deployment
	 */
	constructor(string memory _name, string memory _symbol) RoyalERC721(_name, _symbol) AccessControl(msg.sender, 0) {}
}
