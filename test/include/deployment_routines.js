// All 16 features enabled
const FEATURE_ALL = 0x0000_FFFF;


/**
 * Deploys AI Protocol ERC721 token with all the features enabled
 *
 * @param a0 smart contract owner, super admin
 * @param name ERC721 name, optional, default value "Revenants by AI Protocol"
 * @param symbol ERC721 symbol, optional, default value "REV"
 * @returns ALINFT instance
 */
async function ai_protocol_erc721_deploy(a0, name, symbol) {
    // deploy the token
    const token = await ai_protocol_erc721_deploy_restricted(a0, name, symbol);

    // enable all permissions on the token
    await token.updateFeatures(FEATURE_ALL, { from: a0 });

    // return the reference
    return token;
}

/**
 * Deploys AI Protocol ERC721 token with no features enabled
 *
 * @param a0 smart contract owner, super admin
 * @param name ERC721 name, optional, default value "Revenants by AI Protocol"
 * @param symbol ERC721 symbol, optional, default value "REV"
 * @returns ALINFT instance
 */
async function ai_protocol_erc721_deploy_restricted(a0, name = "Revenants by AI Protocol", symbol = "REV") {
    // smart contracts required
    const ALINFT = artifacts.require("./ALINFT");

    // deploy and return the reference to instance
    return await ALINFT.new(name, symbol, { from: a0 });
}