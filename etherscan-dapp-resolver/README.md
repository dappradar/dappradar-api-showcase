# Etherscan Dapp Resolver

This is a TamperMonkey userscript that shows a related dapp when viewing an Ethereum address on Etherscan.

## Getting Started

1. First, make sure you have the TamperMonkey browser extension installed. If you don't, check out the [TamperMonkey Starter Guide](https://www.tampermonkey.net/faq.php?ext=dhdg&lang=en#Q102) to learn how to install and use it.

2. Before using this script, you'll need to replace the `API_KEY` variable value with your own API key. To get an API key, visit the [DappRadar API](https://dappradar.com/api) page and follow the instructions to obtain your API key.

3. Make sure your API plan supports [getDappsBySmartContract](https://api-docs.dappradar.com/#operation/getDappsBySmartContract) endpoint

## Installation

1. Open the TamperMonkey dashboard in your browser.
2. Click on the "Utilities" tab.
3. Under "URL", paste the link to the raw version of the userscript (e.g., from a GitHub repository).
4. Click "Import" and then confirm by clicking "Install".

## Usage

Once the userscript is installed and active, simply view any Ethereum address on Etherscan, and the related dapp information should appear automatically.

## Example
Example URL: https://etherscan.io/address/0x44709a920fccf795fbc57baa433cc3dd53c44dbe

What you will see:
![Image description](https://i.imgur.com/pMQBDsS.png)


