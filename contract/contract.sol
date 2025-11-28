// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CardDrawer {
    uint8 public cardNumber; // Starts at 0

    // Draw a card (1 to 52)
    function drawCard() public returns (uint8) {
        require(cardNumber < 52, "All cards drawn");

        cardNumber += 1;
        return cardNumber;
    }

    // Reset deck back to zero
    function resetDeck() public {
        cardNumber = 0;
    }
}
