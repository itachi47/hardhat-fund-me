<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/itachi47/hardhat-fund-me">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">HardHat FundMe</h3>

  <p align="center">
    Smart contracts for simple fund me app
    <br />
    <a href="https://github.com/itachi47/minimalist-html-fund-me"><strong>Explore the minimalist front-end for this (FundMe) »</strong></a>
    <br />
    <br />
    <a href="https://github.com/itachi47/hardhat-fund-me">View Demo</a>
    ·
    <a href="https://github.com/itachi47/hardhat-fund-me/issues">Report Bug</a>
    ·
    <a href="https://github.com/itachi47/hardhat-fund-me/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a small project in series to learn smart contract development, where we have created simple fund me application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Solidity][solidity.js]][solidity-url]
- ![hardhat][hardhat_url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- `node version 18`

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/itachi47/hardhat-fund-me.git
   ```

2. Open the repository and run below command to install the dependencies
   ```sh
   yarn
   ```
3. Create a `.env` file with the followings
   ```file
   PRIVATE_KEY (to connect your wallet from metamask)
   GOERLI_RPC_URL (node to test goerli testnet)
   ETHERSCAN_API_KEY (to verify the contracts)
   COINMARKETCAP_API_KEY (for gas estimation in Currency)
   ```
4. hardhat commands to explore the backend
   ```sh
   yarn hardhat  (to see the available options)
   yarn hardhat compile (to compile the contracts)
   yarn hardhat test (to run the tests)
   yarn hardhat test --network goerli (to run the tests on goerli testnet)
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This project have the following function to interact with.

- getBalance: Help to retrieve the account balance of the deployed contract.
- getOwner: Help to find the owner of the contract (gives the address).
- withdraw: Only the owner can withdraw, transfer the asset to the owner of the contract from the contract account.
- fund: Anyone can fund to the contract.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Kuldeep Karhana - kkarhan47@gmail.com

Project Link: [https://github.com/itachi47/hardhat-fund-me](https://github.com/itachi47/hardhat-fund-me)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [freeCodeCamp](https://www.freecodecamp.org/)
- [Patrick Collins](https://twitter.com/PatrickAlphaC)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/itachi47/hardhat-fund-me.svg?style=for-the-badge
[contributors-url]: https://github.com/itachi47/hardhat-fund-me/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/itachi47/hardhat-fund-me.svg?style=for-the-badge
[forks-url]: https://github.com/itachi47/hardhat-fund-me/network/members
[stars-shield]: https://img.shields.io/github/stars/itachi47/hardhat-fund-me.svg?style=for-the-badge
[stars-url]: https://github.com/itachi47/hardhat-fund-me/stargazers
[issues-shield]: https://img.shields.io/github/issues/itachi47/hardhat-fund-me.svg?style=for-the-badge
[issues-url]: https://github.com/itachi47/hardhat-fund-me/issues
[license-shield]: https://img.shields.io/github/license/itachi47/hardhat-fund-me.svg?style=for-the-badge
[license-url]: https://github.com/itachi47/hardhat-fund-me/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/kuldeep-singh-karhana-80835119a/
[product-screenshot]: images/screenshot.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[html.js]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[solidity.js]: https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white
[solidity-url]: https://docs.soliditylang.org/en/v0.8.17/
[hardhat_docs]: https://hardhat.org/docs
[hardhat_url]: https://img.shields.io/badge/hardhat-2.12.4-blue
