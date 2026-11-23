// ============================================================
// THEME (runs immediately to prevent flash)
// ============================================================
(function() {
    const saved = localStorage.getItem('devops-handbook-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
})();

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('devops-handbook-theme', next);
    updateToggleButton(next);
}

function updateToggleButton(theme) {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.innerHTML = theme === 'light'
        ? '<span class="icon">&#9790;</span> Dark'
        : '<span class="icon">&#9788;</span> Light';
}

// ============================================================
// PATH DETECTION
// ============================================================
function getDepth() {
    const path = window.location.pathname;
    if (path.includes('/companies/')) return 2;
    if (path.includes('/containers/') || path.includes('/kubernetes-core/') ||
        path.includes('/kubernetes-advanced/') || path.includes('/devops/') ||
        path.includes('/infrastructure/') || path.includes('/application/') ||
        path.includes('/interview/')) return 1;
    return 0;
}

function prefix() {
    const d = getDepth();
    if (d === 2) return '../../';
    if (d === 1) return '../';
    return '';
}

function getActiveCategory() {
    const path = window.location.pathname;
    if (path.includes('/containers/')) return 'Containers';
    if (path.includes('/kubernetes-core/')) return 'Kubernetes Core';
    if (path.includes('/kubernetes-advanced/')) return 'K8s Advanced';
    if (path.includes('/devops/')) return 'DevOps';
    if (path.includes('/infrastructure/')) return 'Infrastructure';
    if (path.includes('/application/')) return 'Application';
    if (path.includes('/interview/')) return 'Interview';
    return '';
}

// ============================================================
// NAVIGATION TEMPLATE
// ============================================================
function buildNav() {
    const p = prefix();
    const active = getActiveCategory();
    const act = (name) => active === name ? ' class="active"' : '';

    return `
    <nav class="topnav">
        <a href="${p}index.html" class="brand">DevOps Handbook</a>

        <div class="nav-item">
            <a href="${p}containers/index.html"${act('Containers')}>Containers</a>
            <div class="nav-dropdown">
                <a href="${p}containers/docker.html">Docker, Compose & Images</a>
            </div>
        </div>

        <div class="nav-item">
            <a href="${p}kubernetes-core/index.html"${act('Kubernetes Core')}>Kubernetes Core</a>
            <div class="nav-dropdown">
                <a href="${p}kubernetes-core/architecture.html">Architecture</a>
                <a href="${p}kubernetes-core/workloads.html">Workloads</a>
                <a href="${p}kubernetes-core/networking.html">Networking</a>
                <a href="${p}kubernetes-core/storage.html">Storage</a>
                <a href="${p}kubernetes-core/scaling.html">Scaling & Scheduling</a>
                <a href="${p}kubernetes-core/security.html">Security</a>
                <a href="${p}kubernetes-core/observability.html">Observability</a>
            </div>
        </div>

        <div class="nav-item">
            <a href="${p}kubernetes-advanced/index.html"${act('K8s Advanced')}>K8s Advanced</a>
            <div class="nav-dropdown">
                <a href="${p}kubernetes-advanced/advanced-topics.html">Strategies, Helm & Operators</a>
                <a href="${p}kubernetes-advanced/service-mesh.html">Service Mesh (Istio)</a>
                <a href="${p}kubernetes-advanced/argocd-gitops.html">ArgoCD & GitOps</a>
                <a href="${p}kubernetes-advanced/multi-tier-deployment.html">Multi-Tier Deployment</a>
                <a href="${p}kubernetes-advanced/troubleshooting.html">Troubleshooting</a>
                <a href="${p}kubernetes-advanced/yaml-reference.html">YAML Reference</a>
            </div>
        </div>

        <div class="nav-item">
            <a href="${p}devops/index.html"${act('DevOps')}>DevOps</a>
            <div class="nav-dropdown">
                <a href="${p}devops/git.html">Git</a>
                <a href="${p}devops/cicd.html">CI/CD & Pipelines</a>
                <a href="${p}devops/sre.html">SRE Principles</a>
                <a href="${p}devops/observability.html">Observability</a>
                <a href="${p}devops/terraform.html">Terraform</a>
                <a href="${p}devops/ansible.html">Ansible</a>
            </div>
        </div>

        <div class="nav-item">
            <a href="${p}infrastructure/index.html"${act('Infrastructure')}>Infrastructure</a>
            <div class="nav-dropdown">
                <a href="${p}infrastructure/linux-networking.html">Linux & Networking</a>
                <a href="${p}infrastructure/aws-cloud.html">AWS Cloud</a>
                <a href="${p}infrastructure/tls-certificates.html">TLS & Certificates</a>
                <a href="${p}infrastructure/databases.html">Databases</a>
                <a href="${p}infrastructure/message-queues.html">Message Queues</a>
                <a href="${p}infrastructure/cost-finops.html">Cost & FinOps</a>
                <a href="${p}infrastructure/disaster-recovery.html">Disaster Recovery</a>
            </div>
        </div>

        <div class="nav-item">
            <a href="${p}application/index.html"${act('Application')}>Application</a>
            <div class="nav-dropdown">
                <a href="${p}application/microservices.html">Microservices</a>
                <a href="${p}application/api-rest.html">API & REST</a>
                <a href="${p}application/scripting.html">Bash & Python</a>
                <a href="${p}application/prometheus-grafana.html">Prometheus & Grafana</a>
                <a href="${p}application/logging-stacks.html">Logging Stacks</a>
            </div>
        </div>

        <div class="nav-item">
            <a href="${p}interview/index.html"${act('Interview')}>Interview</a>
            <div class="nav-dropdown">
                <a href="${p}interview/interview-prep.html">Interview Prep</a>
                <a href="${p}interview/companies/index.html">Company Interviews</a>
            </div>
        </div>

        <div class="topnav-controls">
            <div class="search-wrapper">
                <span class="search-icon">&#128269;</span>
                <input type="text" class="search-input" placeholder="Search... ( / )">
                <div class="search-results"></div>
            </div>
            <button class="theme-toggle" onclick="toggleTheme()">
                <span class="icon">&#9788;</span> Light
            </button>
        </div>
    </nav>`;
}

// ============================================================
// FOOTER TEMPLATE
// ============================================================
function buildFooter() {
    return `
    <footer>
        DevOps Handbook | Built for study & interview preparation | 2026
    </footer>`;
}

// ============================================================
// SEARCH INDEX
// ============================================================
const searchIndex = [
    { title: "Docker", category: "Containers", keywords: "docker dockerfile compose images containers volumes networking build multi-stage registry push pull run exec", path: "containers/docker.html" },
    { title: "Architecture", category: "Kubernetes Core", keywords: "architecture control plane worker node api server etcd scheduler controller manager kubelet kube-proxy containerd", path: "kubernetes-core/architecture.html" },
    { title: "Workloads", category: "Kubernetes Core", keywords: "pods deployments statefulsets daemonsets jobs cronjobs replicasets rolling update rollback lifecycle", path: "kubernetes-core/workloads.html" },
    { title: "Networking", category: "Kubernetes Core", keywords: "services clusterip nodeport loadbalancer ingress network policies dns coredns cni endpoints", path: "kubernetes-core/networking.html" },
    { title: "Storage", category: "Kubernetes Core", keywords: "volumes pv pvc persistentvolume persistentvolumeclaim storageclass configmap secret csi dynamic provisioning", path: "kubernetes-core/storage.html" },
    { title: "Scaling & Scheduling", category: "Kubernetes Core", keywords: "hpa vpa horizontal pod autoscaler vertical cluster autoscaler affinity taints tolerations resources limits requests", path: "kubernetes-core/scaling.html" },
    { title: "Security", category: "Kubernetes Core", keywords: "rbac role clusterrole rolebinding service account pod security standards securitycontext capabilities", path: "kubernetes-core/security.html" },
    { title: "Observability", category: "Kubernetes Core", keywords: "liveness readiness startup probes health checks logging monitoring prometheus alerting metrics", path: "kubernetes-core/observability.html" },
    { title: "Advanced Topics", category: "K8s Advanced", keywords: "deployment strategies blue green canary helm operators crd custom resource definitions init containers sidecar pdb finalizers gateway api", path: "kubernetes-advanced/advanced-topics.html" },
    { title: "Service Mesh", category: "K8s Advanced", keywords: "istio linkerd envoy sidecar mtls virtualservice destinationrule traffic splitting circuit breaker", path: "kubernetes-advanced/service-mesh.html" },
    { title: "ArgoCD & GitOps", category: "K8s Advanced", keywords: "argocd gitops flux sync app of apps applicationset sync waves hooks drift detection reconciliation", path: "kubernetes-advanced/argocd-gitops.html" },
    { title: "Multi-Tier Deployment", category: "K8s Advanced", keywords: "multi-tier 3-tier frontend backend database networkpolicy kustomize scaling deployment patterns", path: "kubernetes-advanced/multi-tier-deployment.html" },
    { title: "Troubleshooting", category: "K8s Advanced", keywords: "debug crashloopbackoff imagepullbackoff pending oomkilled notready kubectl describe logs exec events", path: "kubernetes-advanced/troubleshooting.html" },
    { title: "YAML Reference", category: "K8s Advanced", keywords: "yaml templates apiversion kind metadata spec deployment service ingress configmap secret pvc hpa role", path: "kubernetes-advanced/yaml-reference.html" },
    { title: "Git", category: "DevOps", keywords: "git branch merge rebase conflict cherry-pick stash gitflow trunk-based hooks .gitignore reflog bisect", path: "devops/git.html" },
    { title: "CI/CD & Pipelines", category: "DevOps", keywords: "cicd pipeline github actions jenkins argocd helm deploy artifact registry continuous integration delivery", path: "devops/cicd.html" },
    { title: "SRE Principles", category: "DevOps", keywords: "sre sli slo sla error budget toil incident management postmortem chaos engineering dora metrics reliability", path: "devops/sre.html" },
    { title: "Observability", category: "DevOps", keywords: "observability metrics logs traces alerting use method red method golden signals three pillars", path: "devops/observability.html" },
    { title: "Terraform", category: "DevOps", keywords: "terraform state modules hcl plan apply providers resources data sources count for_each lifecycle workspaces drift", path: "devops/terraform.html" },
    { title: "Ansible", category: "DevOps", keywords: "ansible playbook role inventory module template vault idempotent agentless ssh handler jinja2", path: "devops/ansible.html" },
    { title: "Linux & Networking", category: "Infrastructure", keywords: "linux processes namespaces cgroups tcp udp dns http load balancer circuit breaker vpc security groups", path: "infrastructure/linux-networking.html" },
    { title: "AWS Cloud", category: "Infrastructure", keywords: "aws eks ec2 s3 iam vpc rds lambda route53 cloudwatch alb nlb ebs efs fargate cost", path: "infrastructure/aws-cloud.html" },
    { title: "TLS & Certificates", category: "Infrastructure", keywords: "tls ssl https certificates cert-manager lets encrypt mtls openssl handshake public private key ca", path: "infrastructure/tls-certificates.html" },
    { title: "Databases", category: "Infrastructure", keywords: "database sql nosql postgresql mysql mongodb redis dynamodb replication sharding backup migration caching cap theorem", path: "infrastructure/databases.html" },
    { title: "Message Queues", category: "Infrastructure", keywords: "kafka rabbitmq sqs sns message queue pub sub event driven saga cqrs event sourcing consumer producer", path: "infrastructure/message-queues.html" },
    { title: "Cost & FinOps", category: "Infrastructure", keywords: "cost optimization finops spot instances reserved savings plans kubecost rightsizing tagging budget", path: "infrastructure/cost-finops.html" },
    { title: "Disaster Recovery", category: "Infrastructure", keywords: "disaster recovery rpo rto backup restore velero multi region active passive failover runbook chaos", path: "infrastructure/disaster-recovery.html" },
    { title: "Microservices", category: "Application", keywords: "microservices monolith saga cqrs api gateway service discovery circuit breaker event driven decomposition ddd bounded context", path: "application/microservices.html" },
    { title: "API & REST", category: "Application", keywords: "api rest http methods status codes oauth jwt grpc graphql openapi swagger rate limiting cors authentication", path: "application/api-rest.html" },
    { title: "Bash & Python", category: "Application", keywords: "bash script python automation cron grep sed awk jq boto3 shell devops one-liner", path: "application/scripting.html" },
    { title: "Prometheus & Grafana", category: "Application", keywords: "prometheus grafana promql metrics counter gauge histogram alertmanager servicemonitor recording rules dashboards thanos", path: "application/prometheus-grafana.html" },
    { title: "Logging Stacks", category: "Application", keywords: "logging elk elasticsearch logstash kibana fluentd loki promtail logql structured logging correlation", path: "application/logging-stacks.html" },
    { title: "Interview Prep", category: "Interview", keywords: "interview system design scenarios behavioral star format gotcha questions aws cloud preparation mock", path: "interview/interview-prep.html" },
    { title: "Kong Inc — Senior TSE", category: "Interview", keywords: "kong api gateway hybrid mode lua plugins troubleshooting tse support engineer rate limiting", path: "interview/companies/kong.html" },
    { title: "Okta — Senior Developer Support Engineer", category: "Interview", keywords: "okta auth0 cic developer support engineer oauth2 oidc saml ws-fed ldap jwt pkce invalid_grant cors sso javascript debugging", path: "interview/companies/okta.html" },
    { title: "Okta — Troubleshooting Scenario Bank", category: "Interview", keywords: "okta troubleshooting scenarios system log saml oidc scim mfa sign-on policy ad ldap agent threatinsight hooks sessions error codes", path: "interview/companies/okta-troubleshooting.html" },
    { title: "Salesforce — Senior DevOps Engineer", category: "Interview", keywords: "salesforce devops sre hyperforce kubernetes istio terraform spinnaker sfdx metadata copado gearset flosum autorabit sandbox scratch org apex coverage package.xml destructivechanges change sets devops center trailhead v2mom ohana trust values star jwt", path: "interview/companies/salesforce.html" },
    { title: "Databricks — Senior TSE (Platform)", category: "Interview", keywords: "databricks tse technical solutions engineer platform support spark delta lake unity catalog lakehouse photon serverless privatelink vnet injection cluster launch failure oom skew aqe dbr lakeflow asset bundles rca incident", path: "interview/companies/databricks.html" },
];

// ============================================================
// SEARCH FUNCTIONALITY
// ============================================================
function performSearch(query) {
    const resultsContainer = document.querySelector('.search-results');
    if (!resultsContainer) return;

    if (!query || query.length < 2) {
        resultsContainer.classList.remove('active');
        return;
    }

    const terms = query.toLowerCase().split(/\s+/);
    const p = prefix();

    const results = searchIndex
        .map(item => {
            const searchText = (item.title + ' ' + item.category + ' ' + item.keywords).toLowerCase();
            let score = 0;
            for (const term of terms) {
                if (item.title.toLowerCase().includes(term)) score += 10;
                else if (item.category.toLowerCase().includes(term)) score += 5;
                else if (item.keywords.includes(term)) score += 3;
                else score -= 2;
            }
            return { ...item, score };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8);

    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">No results found</div>';
    } else {
        resultsContainer.innerHTML = results.map(item =>
            `<a href="${p}${item.path}">
                <span class="result-title">${item.title}</span>
                <span class="result-category">${item.category}</span>
            </a>`
        ).join('');
    }
    resultsContainer.classList.add('active');
}

// ============================================================
// INIT — Inject nav, footer, bind events
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    // Inject nav
    const navEl = document.getElementById('topnav');
    if (navEl) navEl.innerHTML = buildNav();

    // Inject footer
    const footerEl = document.getElementById('footer');
    if (footerEl) footerEl.innerHTML = buildFooter();

    // Theme button
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    updateToggleButton(theme);

    // Search
    const input = document.querySelector('.search-input');
    const results = document.querySelector('.search-results');

    if (input) {
        input.addEventListener('input', function() {
            performSearch(this.value.trim());
        });
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                this.value = '';
                if (results) results.classList.remove('active');
                this.blur();
            }
        });
    }

    document.addEventListener('click', function(e) {
        if (results && !e.target.closest('.search-wrapper')) {
            results.classList.remove('active');
        }
    });

    // Keyboard shortcut: / to focus search
    document.addEventListener('keydown', function(e) {
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            if (input) input.focus();
        }
    });
});
