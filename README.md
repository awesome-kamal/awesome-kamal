# Awesome Kamal

A community-curated directory of tools, guides, and resources for deploying and operating with [Kamal](https://kamal-deploy.org/).

**Website:** [awesomekamal.com](https://awesomekamal.com/) · **Suggest a resource:** [GitHub issues](https://github.com/awesome-kamal/awesome-kamal/issues/new/choose)

> Independent community project, supported by [Upstate](https://upstate.cloud/). Not affiliated with the official Kamal maintainers.

## Official

- [Kamal](https://github.com/basecamp/kamal) — Official CLI for building images, provisioning Docker hosts, and deploying applications over SSH.
- [kamal-proxy](https://github.com/basecamp/kamal-proxy) — Reverse proxy powering health-checked traffic switching during modern Kamal deployments.
- [Kamal documentation](https://kamal-deploy.org/) — Official reference for installing, configuring, operating, and upgrading Kamal.

## Deployment tools

- [kamal-deploy Action](https://github.com/igor-alexandrov/kamal-deploy) — GitHub Action to run Kamal 2 deployments from CI, including destinations and optional image-push control.
- [kamal-complete](https://github.com/hschne/kamal-complete) — Bash, Zsh, and Fish tab completions for Kamal subcommands and flags.
- [Kamal-TUI](https://github.com/stawan15/Kamal-TUI) — Terminal user interface for exploring and running Kamal operations.
- [kamal-panel](https://github.com/wenlingang/kamal-panel) — Self-hosted SSH-based Kamal panel for status, logs, deployments, rollbacks, and notifications.
- [Helmsman](https://github.com/JijoBose/Helmsman) — Local browser interface experiment for Kamal operations.
- [Shipyrd](https://github.com/Shipyrd/shipyrd) — Team deployment dashboard fed by Kamal lifecycle hooks.
- [kamal-autodeploy](https://github.com/Upstate-run/kamal-autodeploy) — Go CLI that generates CI-gated GitHub Actions workflows to deploy only the Kamal services affected by a change.
- [Dash](https://github.com/zoolutions/dash) — Kamal-derived deployment CLI with additional proxy features such as load balancing, readiness gates, and traffic shaping.
- [Polaris](https://polaris-deploy.com/) — Desktop app for running Kamal deployments and reviewing containers, proxy routes, logs, and rollback candidates. **(commercial)**

## Configuration

- [kamal-lint](https://github.com/davafons/kamal-lint) — Static config linter for secrets, registry mismatches, invalid roles, and legacy proxy settings.
- [kamal-json-schema](https://github.com/RockieStar-Inc/kamal-json-schema) — Kamal 2 YAML schema providing editor autocomplete, hints, and validation.

## Operations

- [kamal-backup](https://github.com/crmne/kamal-backup) — Encrypted scheduled database and Active Storage backups packaged as a Kamal accessory.
- [Rails Conductor](https://github.com/nauman/rails-conductor) — Early-stage self-hosted Rails operations control plane with Kamal support.
- [DeployAngel](https://github.com/DeployAngel/deployangel-ruby) — Ruby instrumentation for post-deployment behavior checks in Rails, Hanami, and Sinatra.
- [Automated CrowdSec Kamal](https://github.com/muthuishere/automated-crowdsec-kamal) — Community integration of CrowdSec security tooling with Kamal.
- [Shoestring](https://github.com/tachyurgy/shoestring) — Self-hosted observability that combines SSH snapshots with kamal-proxy request logs.
- [Upstate](https://upstate.cloud/) — Hosted Kamal production visibility with deploy receipts, observer health checks, and alerts. **(commercial)**
- [kamal·ui](https://github.com/ronaldlangeveld/kamal-ui) — Self-hosted Rails dashboard for Kamal containers, proxy routes, logs, resource metrics, and lifecycle actions.
- [Kamal Watch](https://github.com/jefflunt/kamal-watch) — Go-based live dashboard for Kamal hosts, Docker containers, proxy routes, and logs over SSH.

## Infrastructure

- [kamal-ansible-manager](https://github.com/guillaumebriday/kamal-ansible-manager) — Ansible setup for Docker and Ubuntu server hardening before deploying with Kamal.
- [terraform-hetzner](https://github.com/luizkowalski/terraform-hetzner) — Terraform example separating Kamal web hosts from private accessory hosts at Hetzner.
- [kitsune-kit](https://github.com/OmarHrra/kitsune-kit) — Pre-1.0 CLI for provisioning DigitalOcean Ubuntu hosts for Docker and Kamal.
- [dsd-vps-kamal](https://github.com/janraasch/dsd-vps-kamal) — Django Simple Deploy plugin generating Kamal configuration for an existing VPS.
- [shipyard](https://github.com/onancelabs/shipyard) — Opinionated Ansible, Tailscale, Cloudflare, and Caddy setup for Kamal hosting.
- [Single Server](https://github.com/dvassallo/singleserver) — Single-server app delivery system incorporating Kamal, Docker, GitHub, and Cloudflare.
- [KamalCloud](https://kamalcloud.com/) — Hosted control plane for provisioning and operating Kamal servers in your own cloud account. **(commercial)**

## Examples & recipes

- [kamalduo](https://github.com/scarver2/kamalduo) — Sinatra application example for Kamal 2, including health checks and VPS walkthroughs.
- [Kamal frontend/backend demo](https://github.com/hboon/kamal-frontend-backend-demo) — Example of separate Bun/Node frontend and backend services with a database on one Kamal host.
- [GhostCMS on Kamal and Hetzner](https://github.com/h4nz0x/GhostCMS-Kamal-Hetzner) — Community Ghost CMS deployment example using Kamal on Hetzner.
- [kamal-quake](https://github.com/neonwatty/kamal-quake) — QuakeJS browser-game deployment example using Kamal.
- [grimmory-kamal](https://github.com/eval/grimmory-kamal) — Kamal configuration example for a self-hosted library application.
- [Embeddings inference accessory](https://github.com/marianposaceanu/mp-com-embeddings) — Example of an embeddings inference workload deployed alongside a Kamal app.
- [django-emojivote](https://github.com/janraasch/django-emojivote) — Django sample application with deployment-related files.
- [Rails 8 + Kamal local deploy template](https://github.com/HammerSpb/rails-template) — Rails 8 template with production and staging Kamal configs and a Dockerized Linux deployment target for local testing.

## Learning

- [Kamal Handbook](https://kamalmanual.com/handbook/) — Long-form handbook for learning Kamal deployment and production operations. **(commercial)**
- [Kamal Wiki](https://kamal.wiki/) — Independent Kamal documentation and practical tutorial collection.
- [Kamal Deep Dive — Rails World 2026](https://www.youtube.com/watch?v=CsWQD81i5-c) — Josef Strzibny explains what happens during a Kamal deployment, from SSH execution to multi-server routing and Kamal Proxy.

---

Contributions welcome — see [CONTRIBUTING.md](CONTRIBUTING.md). Links are reviewed when added, but functionality and compatibility have not been independently tested. Listings are not endorsements.

Inspired by the original [awesome-kamal](https://github.com/anthonynsimon/awesome-kamal) directory. Catalog metadata is dedicated to the public domain under [CC0](LICENSE).
