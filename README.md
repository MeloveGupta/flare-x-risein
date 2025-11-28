# Card Drawer – On-Chain Deck Interaction

## Contract Address
`0xE0ea442E9D1597f8A11B2CAAA47Ee517892B42e2`  
Explorer: https://coston2-explorer.flare.network/address/0xE0ea442E9D1597f8A11B2CAAA47Ee517892B42e2
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7bd7a9fb-e744-4099-9692-1cb1037adce3" />


---

## Description

The **Card Drawer Project** is a minimalistic decentralized application (dApp) built on the Flare Coston2 Testnet.  
It interacts with a simple Solidity smart contract that simulates sequential card drawing from a 52-card deck.  
Each interaction with the contract reveals the next card number, ensuring a predictable and transparent on-chain experience.

This project is intentionally crafted for beginners aiming to learn how to read and write smart contract state using Wagmi, Viem, and React in a modern Next.js application.

The smart contract exposes three key functions:

- `cardNumber()` — returns the current card number drawn
- `drawCard()` — increments and returns the next card
- `resetDeck()` — resets the deck back to zero

---

## Features

- **Simple On-Chain State**  
  Interacts with a lightweight smart contract using clean and minimal logic.

- **Live Card Tracking**  
  Displays the current card number directly from the blockchain.

- **Draw New Card**  
  Users can draw the next card sequentially (1 to 52).

- **Reset Function**  
  Allows resetting the deck back to the beginning.

- **Wallet-Gated UI**  
  Users must connect their wallet before interacting.

- **Transaction Feedback**  
  Real-time transaction hash, confirmation status, and error handling.

- **Built with Wagmi + Viem**  
  Modern and efficient web3 integration with React/Next.js.

---

## How It Solves the Problem

Traditional demos of smart contract interaction are often complex, involving arrays, randomness, mappings, or heavy logic.  
Beginners struggle with:

- Understanding state reads/writes  
- Handling wallet connections  
- Dealing with on-chain transactions  
- Reflecting blockchain responses in the UI  

This project solves that by offering:

### 1. **A Minimal Contract**
The Solidity contract contains only:
- One state variable  
- Two write functions  
- One read function  

Perfect for learning without unnecessary complexity.

### 2. **Clear dApp Integration**
The project demonstrates how to:
- Read contract state with `useReadContract`
- Write transactions with `useWriteContract`
- Show confirmations using `useWaitForTransactionReceipt`
- Keep UI reactive and responsive

### 3. **Real-World Web3 Patterns**
Even though simple, the dApp follows production-grade patterns:
- Wallet gating  
- Loading and pending states  
- Error capture  
- State refetching after confirmation  

### 4. **Beginner-Friendly UI**
A clean, easy-to-use interface that visually demonstrates how interaction with a smart contract works.

---

This repository serves as the ideal starting point for anyone trying to enter the world of Ethereum-compatible smart contract development and dApp frontend integration.
