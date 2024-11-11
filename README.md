# Poultry Blockchain POC

This project is a proof of concept (POC) blockchain application for tracking poultry batches through the supply chain using Ethereum's blockchain. The application allows different entities to store and retrieve data associated with poultry batches to ensure traceability and transparency.

## Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Scripts and Files](#scripts-and-files)
- [Usage](#usage)
- [License](#license)

## Project Overview
The project implements a smart contract that stores information about poultry batches, including:
- Entity type and details
- Geographic location (latitude and longitude)
- Batch ID and timestamp

### Smart Contract
The core smart contract `PoultryTraceability` enables:
- Storing batch details via the `store` function
- Retrieving all stored batches with the `retrieve` function
- Searching for specific batches by ID using the `search` function

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later)
- [Hardhat](https://hardhat.org/)
- [Alchemy](https://www.alchemy.com/) (for Ethereum API access)
  
### Installation
1. Clone the repository.
   ```bash
   git clone https://github.com/amandeepahuja/Poultry-App.git
   ```
2. Navigate to the project directory.
   ```bash
   cd Poultry-App
   ```
3. Install the dependencies.
   ```bash
   npm install
   ```

## Configuration

1. **Environment Variables**  
   Configure the `.env` file with your Alchemy API URL and Ethereum private key. Ensure the `.env` file includes:
   ```plaintext
   SEPOLIA_URL=https://eth-goerli.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
   PRIVATE_KEY=YOUR_PRIVATE_KEY
   ```

2. **.gitignore**  
   The `.gitignore` file ensures sensitive information in `.env` is not tracked.

## Scripts and Files

- **`hardhat.config.js`**: Configures Hardhat to use the Sepolia test network with Alchemy.
- **`entries.txt`**: Sample data for testing the smart contract functionality.
- **`contracts/poultry_app.sol`**: The main smart contract implementing poultry batch tracking.

## Usage

1. **Deploy the Smart Contract**  
   Deploy the contract to the Sepolia testnet by running:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```
2. **Interact with the Contract**  
   Use the `copy_script.ipynb` Jupyter notebook to interact with the deployed contract. The notebook contains sample code for storing, retrieving, and searching poultry batches.

## License
This project is licensed under the [GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html).

--- 

This file provides an overview, setup instructions, and key file descriptions for easy onboarding and usage. Let me know if you need further customization!
