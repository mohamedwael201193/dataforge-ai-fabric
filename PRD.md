Product Requirements Document (PRD): DataForge Hub
1. Overview & Objectives
Product Vision: DataForge Hub is a decentralized marketplace on Filecoin Onchain Cloud for crowdsourcing, verifying, and monetizing AI datasets, reducing biases through diverse, on-chain verifiable sources.
Objectives:

Solve AI data biases by enabling global contributions.
Achieve PMF with 10K active users in Q1 post-launch.
Integrate deeply with Filecoin services for composable storage/payments/retrieval.

Scope:

MVP: Uploads, payments, retrieval, basic incentives.
Future: Advanced analytics, marketplace licensing, Python SDK.

2. User Personas

Contributor "Alex" (Data Provider):

Demographics: 25–35, freelancer in emerging markets.
Goals: Monetize niche data (e.g., regional languages/images).
Pains: Lack of verifiability, low earnings; Frustrations: Complex uploads.
Behaviors: Uses web apps; seeks passive income.


Buyer "Jordan" (AI Developer/Researcher):

Demographics: 28–40, at startups/academia.
Goals: Access diverse, bias-free datasets for model training.
Pains: High costs, slow access, unverifiable sources.
Behaviors: Integrates with tools like Hugging Face; values speed/SLAs.



3. User Flows

Contributor Flow:

Sign in (wallet connect).
Upload dataset (drag-drop, metadata entry).
Synapse SDK stores to Warm Storage; PDP verifies.
Set price; publish to marketplace.
Earn via payments + voting rewards.


Buyer Flow:

Search/browse datasets (filters: type, diversity score).
Preview (FilCDN fast access).
Purchase (Filecoin Pay: one-time/streaming).
Retrieve full dataset (CDN URL).
Vote on quality for community incentives.


Admin/Community Flow: On-chain voting via FVM; dashboard for disputes.

4. Functional Requirements

Core Features:

Upload: Support images/text/CSV; auto-PDP.
Search: Keyword, filters; diversity metrics.
Payments: FIL/ERC-20/USDFC; escrow via FVM.
Retrieval: Token-gated FilCDN; SLAs (<1s previews).
Incentives: FVM contracts for voting/rewards.


Non-Functional:

Performance: 99.9% uptime; <3s retrieval start.
Security: AES-256 encryption; threat mitigations (see arch doc).
Usability: Browser-only; <5 min onboarding.


Success Metrics/Acceptance Criteria:

≥80% datasets pass quality votes.
+10% model accuracy lift for buyers (via eval feedback).
FilCDN p95 <1s for previews.



5. KPIs & Milestones

KPIs:

Acquisition: 10K users Q1; 30% retention.
Engagement: 1K uploads/mo; $10K tx volume Q1.
Impact: 15% reported bias reduction; 1M datasets Year 1.


Milestones:

Wave 1: Design/PRD complete.
Wave 2: MVP testnet.
Wave 3: Beta with incentives.
Wave 4: Mainnet launch.



6. Risks & Mitigations

Risk: Low adoption—Mitigate: Freemium + partnerships.
Risk: Data quality—Mitigate: Voting + PDP.
Risk: Scalability—Mitigate: Filecoin's composable services.
