# DevOps & SRE Handbook

A comprehensive, offline-ready reference site covering everything a DevOps/SRE engineer needs — from Docker and Kubernetes to AWS, Terraform, CI/CD, and interview preparation.

**[Open the Handbook](index.html)** (open `index.html` in your browser)

---

## What's Inside

| Category | Pages | Topics |
|----------|-------|--------|
| **Containers** | 1 | Docker, Dockerfile, Compose, Docker vs K8s |
| **Kubernetes Core** | 7 | Architecture, Workloads, Networking, Storage, Scaling, Security, Observability |
| **Kubernetes Advanced** | 5 | Helm, Service Mesh (Istio), ArgoCD/GitOps, Troubleshooting, YAML Reference |
| **DevOps** | 6 | Git, CI/CD, SRE Principles, Observability, Terraform, Ansible |
| **Infrastructure** | 7 | Linux/Networking, AWS, TLS/Certificates, Databases, Message Queues, FinOps, Disaster Recovery |
| **Application** | 5 | Microservices, API/REST, Bash/Python Scripting, Prometheus/Grafana, Logging Stacks |
| **Interview** | 1 | System Design, Scenarios, Gotchas, AWS, Behavioral |

**Total: 40 pages | 7 categories | 100+ YAML examples | 80+ Interview Q&A**

---

## Features

- **Offline-first** — Pure HTML/CSS/JS, no server needed. Open from Finder or any browser.
- **Dark theme** by default with Light mode toggle
- **Search** — Instant keyword search across all 32 content pages
- **Priority badges** — Must Know / High / Medium on each topic
- **Hover navigation** — Dropdown menus in the topbar show sub-pages
- **Production-ready YAML** — Copy-paste templates for every K8s resource
- **Real-world troubleshooting** — Debug scenarios with exact `kubectl` commands
- **ASCII diagrams** — Architecture visualizations on every page
- **Interview-ready** — Q&A blocks, system design walkthroughs, gotcha questions

---

## Directory Structure

```
DevOps-SRE Handbook/
├── index.html                  ← Homepage (7 category cards)
├── css/style.css               ← Shared stylesheet (dark/light themes)
├── js/app.js                   ← Search + theme toggle
│
├── containers/                 ← Docker
├── kubernetes-core/            ← Architecture, Workloads, Networking, Storage, Scaling, Security, Observability
├── kubernetes-advanced/        ← Helm, Istio, ArgoCD, Troubleshooting, YAML Reference
├── devops/                     ← Git, CI/CD, SRE, Observability, Terraform, Ansible
├── infrastructure/             ← Linux, AWS, TLS, Databases, Queues, FinOps, DR
├── application/                ← Microservices, APIs, Scripting, Prometheus, Logging
└── interview/                  ← Full interview prep
```

---

## How to Use

1. Clone or download this repo
2. Open `index.html` in any browser
3. Navigate by category or use the search bar (press `/` to focus)
4. Toggle dark/light theme with the button in the top-right

No build step, no dependencies, no internet required.

---

## Topics Covered

### Kubernetes
Architecture (control plane, worker nodes, etcd, scheduler) · Pods, Deployments, StatefulSets, DaemonSets, Jobs · Services, Ingress, Network Policies, DNS · PV/PVC, StorageClasses, ConfigMaps, Secrets · HPA, VPA, Affinity, Taints · RBAC, Service Accounts, Pod Security · Probes, Logging, Monitoring, Alerting · Helm, Operators, CRDs · Service Mesh (Istio/Linkerd) · ArgoCD, GitOps · Troubleshooting with debug flowcharts

### DevOps & SRE
Git branching (GitFlow, trunk-based) · CI/CD pipelines (GitHub Actions, Jenkins) · SLI/SLO/SLA, Error Budgets · Incident Management, Postmortems · DORA Metrics · Chaos Engineering · Terraform (state, modules, workspaces) · Ansible (playbooks, roles, vault)

### Infrastructure
Linux (processes, namespaces, cgroups) · TCP/IP, DNS, Load Balancing · AWS (EKS, IAM, VPC, S3, Lambda, Route53) · TLS/SSL, cert-manager, mTLS · Databases (SQL/NoSQL, replication, sharding) · Message Queues (Kafka, RabbitMQ, SQS) · Cost Optimization / FinOps · Disaster Recovery (RPO/RTO, Velero)

### Application
Microservices (saga, CQRS, circuit breaker) · REST APIs, gRPC, GraphQL · OAuth/JWT · Bash & Python scripting · Prometheus, PromQL, Grafana · ELK Stack, Loki

---

## Built With

- HTML5 + CSS3 (custom properties for theming)
- Vanilla JavaScript (no frameworks)
- No external dependencies at runtime

---

## Author

**Saurabh Kala** — DevOps Engineer  
[GitHub](https://github.com/saurabh111121) · [Portfolio](https://saurabh111121.github.io)
