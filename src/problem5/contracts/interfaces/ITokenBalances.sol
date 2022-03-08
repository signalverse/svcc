// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

/**
 * @title ITokenBalances
 */
interface ITokenBalances {
    struct TokenBalanceDto {
        address token;
        uint256 balance;
    }

    function getBalances(address wallet, address[] memory tokens)
        external
        view
        returns (TokenBalanceDto[] memory);
}
