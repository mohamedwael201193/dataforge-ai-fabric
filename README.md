# DataForge Hub

[![Filecoin Onchain Cloud](https://img.shields.io/badge/Powered%20by-Filecoin%20Onchain%20Cloud-blue)](https://filecoin.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

DataForge Hub is a decentralized marketplace designed to crowdsource and monetize high-quality AI training datasets. Leveraging the Filecoin Onchain Cloud framework, it empowers global contributors to upload, verify, and sell data snippets through on-chain payments and efficient retrieval mechanisms. By promoting diverse and verifiable data sources, DataForge Hub mitigates AI biases, making high-quality datasets accessible to AI developers and researchers worldwide, thereby democratizing AI innovation.

This repository contains the product design documentation for Wave 1 of the Filecoin Onchain Cloud Alpha Cohort. Explore the interactive design showcase at: [https://dataforge-ai-filecoin.vercel.app/](https://dataforge-ai-filecoin.vercel.app/)

## Problem Definition

The proliferation of AI models is hampered by inherent biases stemming from centralized datasets controlled by major tech entities. These datasets are often limited in diversity, expensive to acquire, and lack transparency or verifiable provenance. Smaller AI teams and researchers face significant barriers to accessing quality data, resulting in skewed models that perpetuate unfair outcomes in sectors like healthcare, finance, and social services. This not only affects underrepresented communities but also stifles broader AI advancement due to the high costs and inaccessibility of ethical data sourcing.

## Solution

DataForge Hub addresses these challenges by building a composable ecosystem on Filecoin Onchain Cloud:
- **Data Uploads**: Contributors use a user-friendly web app to upload data snippets, which are securely stored using Filecoin Warm Storage Service, incorporating Proof of Data Possession (PDP) for ongoing verifiability.
- **Monetization Mechanisms**: Buyers can acquire data access via Filecoin Pay, supporting flexible payment options such as one-time purchases or streaming payments in FIL or ERC-20 tokens.
- **Efficient Retrieval**: Data is delivered rapidly through FilCDN, guaranteeing service level agreements (SLAs) and performance comparable to traditional CDNs.
- **Incentive Structures**: An on-chain voting system rewards high-quality contributions, encouraging a vibrant, self-sustaining community.

Integration is facilitated via the Synapse SDK, providing JavaScript/TypeScript APIs for seamless uploads, payments, and retrievals.

## Value Proposition

- **Contributors**: Monetize personal or collected data with verifiable ownership, earning passive income while contributing to ethical AI.
- **Buyers (AI Developers & Researchers)**: Gain cost-effective access to diverse, bias-reduced datasets, enabling the creation of more accurate and fair AI models.
- **Ecosystem Impact**: Enhances Filecoin's role in AI data markets, reducing global AI biases and fostering innovation in decentralized data economies.

## Technical Architecture

### High-Level Architecture Diagram
*(For an interactive flowchart, refer to the live site at [https://dataforge-ai-filecoin.vercel.app/](https://dataforge-ai-filecoin.vercel.app/). Below is a textual representation:)*

```
+-------------------+     +---------------------+     +-------------------+
|  Contributors     |     |  DataForge Hub      |     |  Buyers (AI Teams)|
|  (Web App Users)  |     |  (Decentralized     |     |                   |
+-------------------+     |  Marketplace)       |     +-------------------+
          |               +---------------------+               ^
          | Upload Data            |                            | Purchase/Retrieve
          v                        v                            |
+-------------------+     +---------------------+     +-------------------+
| Filecoin Warm     |<----| Synapse SDK         |---->| FilCDN for        |
| Storage Service   |     | (JS/TS Integration) |     | Fast Delivery     |
| (PDP Verification)|     +---------------------+     +-------------------+
+-------------------+              |
                                   v
                          +-------------------+
                          | Filecoin Pay      |
                          | (Payments in FIL/ |
                          |  ERC-20, Streaming)|
                          +-------------------+
                                   |
                                   v
                          +-------------------+
                          | On-Chain Voting   |
                          | & Incentives      |
                          +-------------------+
```

### Components and Filecoin Onchain Cloud Integration
- **Frontend**: Built with modern web technologies, the app interfaces with the Synapse SDK to handle user interactions for data uploads, browsing, and transactions.
- **Backend Services**:
  - **Filecoin Warm Storage Service**: Utilized for efficient storage with integrated PDP to ensure data integrity and availability over time. This goes beyond basic storage by embedding verifiability directly into the on-chain cloud framework.
  - **Filecoin Pay**: Implements secure, composable payment solutions for monetizing data access, supporting both spot and recurring payments to accommodate various use cases in AI data consumption.
  - **FilCDN**: Ensures low-latency data retrieval, meeting SLAs critical for real-time AI training workflows.
- **Depth of Integration**: DataForge Hub fully leverages Filecoin Onchain Cloud's composable services, combining storage, payments, and delivery into a unified, on-chain ecosystem. This includes custom smart contracts for voting and incentives, demonstrating advanced usage for AI-specific marketplaces.

## Cohort Alignment & Ambition

DataForge Hub aligns perfectly with the Filecoin Onchain Cloud Alpha Cohort's focus on transforming Filecoin into a composable cloud framework for real-world applications, particularly in AI and data markets. Our ambition is to scale to over 1 million datasets within the first year, establishing product-market fit (PMF) for Filecoin in decentralized AI infrastructure. By addressing AI data challenges, we aim to drive widespread adoption of Filecoin services, contributing to a more equitable AI landscape.

## Participation & Engagement

Throughout the cohort, we've actively engaged by attending kickoff calls, providing feedback on SDK improvements, and collaborating with other builders via community channels. This includes submitting iterative designs, participating in office hours, and sharing progress updates to foster collective growth in the Filecoin ecosystem.

## Go-to-Market Strategy

- **Business Model**: Freemium approach with free uploads and browsing; premium access via paid subscriptions or per-dataset purchases.
- **Target Users**: AI startups, academic researchers, and platforms like Hugging Face for seamless integrations.
- **Revenue Streams**: 5% platform fees on transactions.
- **Growth Plan**: Launch MVP, partner with AI communities, and iterate based on cohort feedback to achieve global scale.

## Pain Points & Feedback for Filecoin Onchain Cloud

- Enhance SDK documentation with AI data marketplace examples.
- Simplify streaming payment integrations for subscription-based access.
- Suggestion: Incorporate modular community governance tools into the Synapse SDK for easier incentive systems.

## Setup Instructions

1. Visit [https://dataforge-ai-filecoin.vercel.app/](https://dataforge-ai-filecoin.vercel.app/)
2. Navigate through sections for in-depth problem analysis, solution overview, and technical details.

## License

MIT License. See [LICENSE](LICENSE) for details.
