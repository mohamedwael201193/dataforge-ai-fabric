# DataForge Hub

[![Filecoin Onchain Cloud](https://img.shields.io/badge/Powered%20by-Filecoin%20Onchain%20Cloud-blue)](https://filecoin.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

DataForge Hub is a decentralized marketplace for crowdsourcing and monetizing high-quality AI training datasets. Built on Filecoin Onchain Cloud, it enables global contributors to upload, verify, and sell data snippets with on-chain payments and fast retrieval. This reduces AI biases through diverse, verifiable data sources, democratizing access for AI developers and researchers.

This repository hosts the product design documentation for Wave 1 of the Filecoin Onchain Cloud Alpha Cohort. The interactive design showcase is live at: [https://dataforge-ai-filecoin.vercel.app/](https://dataforge-ai-filecoin.vercel.app/)

## Problem Statement

AI models often suffer from biases due to reliance on centralized, limited datasets from big tech companies. Sourcing diverse, high-quality data is costly, inaccessible for smaller teams, and lacks transparency or verifiability. This leads to unfair outcomes in critical applications like healthcare and finance, affecting underrepresented groups and hindering innovation.

## Solution

DataForge Hub leverages Filecoin Onchain Cloud to create a composable, on-chain ecosystem:
- **Uploads**: Contributors upload data via a web app, stored on Filecoin Warm Storage Service with PDP (Proof of Data Possession) for verifiability.
- **Monetization**: Buyers purchase access using Filecoin Pay (supporting one-time or streaming payments in FIL/ERC-20).
- **Retrieval**: Fast delivery via FilCDN, ensuring SLAs and CDN-speed access.
- **Incentives**: On-chain community voting rewards quality contributions, fostering a self-sustaining marketplace.

The Synapse SDK provides seamless JS/TS integration for all interactions.

## Value Proposition

- **For Contributors**: Earn passive income by sharing verifiable data.
- **For Buyers (AI Teams)**: Access affordable, diverse datasets to build unbiased models.
- **For the Ecosystem**: Reduces AI biases, boosts Filecoin adoption in AI data markets.

## Technical Design

### Architecture Diagram
(Embed or link to a diagram; for now, refer to the live site for an interactive flowchart.)

- **Frontend**: Web app using Synapse SDK for uploads, payments, and retrievals.
- **Backend Integration**:
  - Filecoin Warm Storage Service: Combines PDP verification with integrated payments for faster storage.
  - Filecoin Pay: Toolkit for accepting FIL/ERC-20, including streaming for ongoing access.
  - FilCDN: Blazing-fast CDN for PDP deals.
  - Depth: Full-stack usage beyond basic storage—composable services for verifiability, payments, and SLAs.

## Go-to-Market Strategy

- **Freemium Model**: Free uploads/browsing, paid premium access.
- **Target Audience**: AI startups, researchers (e.g., integrate with Hugging Face).
- **Revenue**: 5% transaction fees.
- **Ambition**: Scale to 1M+ datasets, validate PMF for Filecoin Onchain Cloud in AI.

## Pain Points & Feedback for Filecoin Onchain Cloud

- SDK docs could include more AI-specific examples.
- Easier integrations for streaming payments in data marketplaces.
- Suggestions: Add built-in community voting modules to Synapse SDK.

## Setup Instructions


1. Visit [https://dataforge-ai-filecoin.vercel.app/](https://dataforge-ai-filecoin.vercel.app/)
2. Explore sections for problem, solution, and technical details.



## License

MIT License. See [LICENSE](LICENSE) for details.


