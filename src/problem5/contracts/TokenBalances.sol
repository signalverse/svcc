//SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/ITokenBalances.sol";

/**
 * @title TokenBalances
 */
contract TokenBalances is ITokenBalances {
    uint256 public constant MAX_NUM_TOKENS = 500;

    function getBalances(address wallet, address[] memory tokens)
        external
        view
        returns (TokenBalanceDto[] memory)
    {
        require(wallet != address(0), "TokenBalances: zero wallet");
        require(tokens.length > 0, "TokenBalances: empty tokens");
        require(
            tokens.length <= MAX_NUM_TOKENS,
            "TokenBalances: exceed max tokens"
        );

        TokenBalanceDto[] memory tokenBalances = new TokenBalanceDto[](
            tokens.length
        );

        for (uint256 i = 0; i < tokens.length; i++) {
            uint256 balance = IERC20(tokens[i]).balanceOf(wallet);

            tokenBalances[i] = TokenBalanceDto({
                token: tokens[i],
                balance: balance
            });
        }

        return tokenBalances;
    }
}
