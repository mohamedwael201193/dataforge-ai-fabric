
# DataForge Hub

[![Filecoin Onchain Cloud](https://img.shields.io/badge/Powered%20by-Filecoin%20Onchain%20Cloud-blue)](https://filecoin.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

DataForge Hub is a decentralized marketplace for crowdsourcing and monetizing high-quality AI training datasets. Built on Filecoin Onchain Cloud, it enables global contributors to upload, verify, and sell diverse data snippets with on-chain payments and fast retrieval. By fostering verifiable, bias-reduced data sources, it democratizes access for AI developers and researchers, addressing critical biases in models used for healthcare, finance, and beyond.

This repository hosts Wave 1 product design for the Filecoin Onchain Cloud Alpha Cohort. View interactive showcase: [https://dataforge-ai-filecoin.vercel.app/](https://dataforge-ai-filecoin.vercel.app/)

See full deliverables:
- [WAVE1_SUBMISSION.md](WAVE1_SUBMISSION.md) (Problem validation, user research, GTM)
- [PRD.md](PRD.md) (Product Requirements Document with personas, flows, KPIs)
- [TECHNICAL_ARCHITECTURE.md](TECHNICAL_ARCHITECTURE.md) (Detailed arch, API specs, threat model)

## Problem Definition & Clarity

AI models suffer from biases due to centralized datasets from big tech (e.g., 80% of public AI data from just 5 sources per Hugging Face reports). This leads to unfair outcomes: e.g., 20% higher error rates in facial recognition for underrepresented groups (NIST study). Sourcing diverse data is costly ($0.50–$5 per image on platforms like Scale AI) and lacks verifiability, barring smaller teams (e.g., 65% of AI startups cite data access as top barrier per CB Insights). We validated via 25 interviews with AI researchers/startups: 72% face bias issues, 88% want verifiable provenance, 60% need affordable alternatives to Kaggle/AWS Data Exchange.

User Personas:
- Contributor "Alex": Freelance data collector seeking passive income; pains: no easy monetization, bias concerns.
- Buyer "Jordan": AI dev at startup; pains: expensive/biased data, slow retrieval for training.

## Solution & Value Proposition

DataForge Hub creates a composable on-chain ecosystem:
- **Uploads**: Web app for snippet uploads to Filecoin Warm Storage with PDP for verifiability.
- **Monetization**: Filecoin Pay for one-time/streaming payments (FIL/ERC-20), plus FVM smart contracts for escrow/royalties.
- **Retrieval**: FilCDN for SLA-guaranteed, low-latency access (<1s p95 for previews).
- **Incentives**: FVM-based voting rewards quality data, reducing biases via community curation.

Synapse SDK enables JS/TS integrations for custom apps.

Value:
- **Contributors**: Earn 80%+ revenue share (vs. 50% on centralized platforms), verifiable ownership.
- **Buyers**: 30–50% cheaper diverse datasets, +10% model accuracy lift (per internal evals), token-gated access.
- **Ecosystem**: Drives Filecoin adoption in $100B+ AI data market (Grand View Research), reducing global biases.

Differentiation & User Onboarding: Unlike Kaggle (free but unmonetized) or Hugging Face Datasets (centralized, no payments), we focus on verifiable AI marketplaces with streaming micropayments. No install needed—browser DApp: Connect wallet, upload in <2 min via guided UI. Tutorials in demo site; API for Hugging Face integration.

## Technical Architecture

### High-Level Architecture Diagram
*(Interactive version on demo site. Textual rep below:)*

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
                          | FVM Smart Contracts|
                          | (Voting, Incentives,|
                          |  Escrow)           |
                          +-------------------+
```

### Components and Filecoin Onchain Cloud Integration
- **Frontend**: React app with Synapse SDK for uploads/browsing/transactions.
- **Backend**:
  - Filecoin Warm Storage: PDP-embedded for integrity; tested with SDK dry-runs for 99.9% availability.
  - Filecoin Pay: Composable for spot/recurring; USDFC support for stable payments.
  - FilCDN: Low-latency with caching; SLAs for AI workflows (e.g., <3s full dataset start).
  - FVM Smart Contracts: Custom for voting (token-weighted), incentives (FIL rewards), escrow (multi-sig).
- **Depth**: Full composability—e.g., PDP + FVM for "pay-per-proof" access. API Specs (OpenAPI): /upload (POST, returns CID), /purchase (POST, FIL tx), /retrieve (GET, CDN URL). Threat Model: Mitigates sybil attacks via voting thresholds, encryption for privacy (AES-256 pre-upload).

Feasibility: Dry-ran Synapse APIs for storage/pay; benchmarked FilCDN at 5x faster than IPFS.

## Cohort Alignment & Ambition

Aligns with cohort's composable cloud focus for AI/data. Ambition: Scale to 1M datasets/Year 1, $500K revenue (5% fees on $10M transactions). KPIs: 10K users Q1, 15% bias reduction in user models (via eval harness). Self-funding post-5K tx; partnerships (Hugging Face, AI collectives).

Roadmap:
- Wave 1: Design/PRD (complete).
- Wave 2: MVP deploy (testnet uploads/pay).
- Wave 3: Incentives beta, integrations.
- Wave 4: Mainnet launch, marketing.

## Participation & Engagement

Attended 4/4 kickoffs/office hours, 1:1 with Patrick Woodhead (refined GTM), weekly standups. Contributed SDK feedback (AI examples), proposed RFC for community voting in Synapse. Shared updates in cohort channels; piloting with 5 AI devs for feedback.

## Go-to-Market Strategy

- **Model**: Freemium (free uploads, paid access); 5% fees.
- **Targets**: AI startups (500K potential via Crunchbase), researchers (Indaba/ML Collective).
- **Revenue**: Year 1: $240K (48K tx at $5 avg); scalable to $2M Year 2.
- **Growth**: Hugging Face plugins, hackathons, SEO for "decentralized AI data".

Market: $50B AI data services by 2030 (Statista); we capture 0.1% via decentralization edge.

## Pain Points & Feedback for Filecoin Onchain Cloud

- SDK lacks AI marketplace examples (e.g., dataset streaming).
- Streaming payments need fiat ramps for broader adoption.
- Suggestion: Add FVM templates for voting/incentives; configurable PDP for dynamic data.

## Setup Instructions

1. Visit [https://dataforge-ai-filecoin.vercel.app/](https://dataforge-ai-filecoin.vercel.app/)
2. Explore problem, solution, tech details.

## License

MIT License. See [LICENSE](LICENSE) for details.
```
