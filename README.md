# Card Drawer – Simple Solidity Smart Contract

A minimal and beginner-friendly Solidity smart contract that simulates drawing cards from a deck.  
No complicated logic, no randomness, and no arrays — just the most basic version of a card-drawing mechanism, perfect for learning smart contract fundamentals.

---

## Project Description

The **Card Drawer** smart contract is designed as an extremely simple Web3 learning project. It allows users to draw cards sequentially from a virtual deck of 52 cards. Each call to `drawCard()` returns the next card number, starting from 1 up to 52.

This project is intentionally kept minimal to help beginners understand how smart contracts work, how state changes happen, and how blockchain functions operate.

---

## What It Does

- Starts with an internal `cardNumber` set to `0`.
- Each time you call `drawCard()`, the contract increments the number and returns a card (1–52).
- Prevents drawing more than 52 cards.
- Allows resetting the deck back to the start using `resetDeck()`.

It acts like a very simple counter-based card drawer — ideal for learning, testing, or using as a base for more advanced logic.

---

## Features

- Beginner-friendly and extremely easy to understand  
- Uses only **one state variable** (`cardNumber`)  
- Contains only **two functions**:  
  - `drawCard()` – draws the next card  
  - `resetDeck()` – resets the deck  
- No arrays, loops, randomness, or advanced concepts  
- Compatible with Remix, Hardhat, Foundry, and all EVM networks  
- Perfect for understanding state changes in smart contracts  

---

## Deployed Smart Contract Link

**0xE0ea442E9D1597f8A11B2CAAA47Ee517892B42e2**

(Replace this placeholder with your deployed contract link.)
