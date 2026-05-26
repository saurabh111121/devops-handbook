// ============================================================
// THEME TOGGLE
// ============================================================
(function() {
    const saved = localStorage.getItem('devops-handbook-theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    }
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
    if (theme === 'light') {
        btn.innerHTML = '<span class="icon">&#9790;</span> Dark';
    } else {
        btn.innerHTML = '<span class="icon">&#9788;</span> Light';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    updateToggleButton(theme);
});

// ============================================================
// SEARCH
// ============================================================
const searchIndex = [
    // Containers
    { title: "Docker", category: "Containers", keywords: "docker dockerfile compose images containers volumes networking build multi-stage registry push pull run exec", path: "containers/docker.html" },

    // Kubernetes Core
    { title: "Architecture", category: "Kubernetes Core", keywords: "architecture control plane worker node api server etcd scheduler controller manager kubelet kube-proxy containerd", path: "kubernetes-core/architecture.html" },
    { title: "Workloads", category: "Kubernetes Core", keywords: "pods deployments statefulsets daemonsets jobs cronjobs replicasets rolling update rollback lifecycle", path: "kubernetes-core/workloads.html" },
    { title: "Networking", category: "Kubernetes Core", keywords: "services clusterip nodeport loadbalancer ingress network policies dns coredns cni endpoints", path: "kubernetes-core/networking.html" },
    { title: "Storage", category: "Kubernetes Core", keywords: "volumes pv pvc persistentvolume persistentvolumeclaim storageclass configmap secret csi dynamic provisioning", path: "kubernetes-core/storage.html" },
    { title: "Scaling & Scheduling", category: "Kubernetes Core", keywords: "hpa vpa horizontal pod autoscaler vertical cluster autoscaler affinity taints tolerations resources limits requests", path: "kubernetes-core/scaling.html" },
    { title: "Security", category: "Kubernetes Core", keywords: "rbac role clusterrole rolebinding service account pod security standards securitycontext capabilities", path: "kubernetes-core/security.html" },
    { title: "Observability", category: "Kubernetes Core", keywords: "liveness readiness startup probes health checks logging monitoring prometheus alerting metrics", path: "kubernetes-core/observability.html" },

    // Kubernetes Advanced
    { title: "Advanced Topics", category: "K8s Advanced", keywords: "deployment strategies blue green canary helm operators crd custom resource definitions init containers sidecar pdb finalizers gateway api", path: "kubernetes-advanced/advanced-topics.html" },
    { title: "Service Mesh", category: "K8s Advanced", keywords: "istio linkerd envoy sidecar mtls virtualservice destinationrule traffic splitting circuit breaker", path: "kubernetes-advanced/service-mesh.html" },
    { title: "ArgoCD & GitOps", category: "K8s Advanced", keywords: "argocd gitops flux sync app of apps applicationset sync waves hooks drift detection reconciliation", path: "kubernetes-advanced/argocd-gitops.html" },
    { title: "Troubleshooting", category: "K8s Advanced", keywords: "debug crashloopbackoff imagepullbackoff pending oomkilled notready kubectl describe logs exec events", path: "kubernetes-advanced/troubleshooting.html" },
    { title: "YAML Reference", category: "K8s Advanced", keywords: "yaml templates apiversion kind metadata spec deployment service ingress configmap secret pvc hpa role", path: "kubernetes-advanced/yaml-reference.html" },

    // DevOps
    { title: "Git", category: "DevOps", keywords: "git branch merge rebase conflict cherry-pick stash gitflow trunk-based hooks .gitignore reflog bisect", path: "devops/git.html" },
    { title: "CI/CD & Pipelines", category: "DevOps", keywords: "cicd pipeline github actions jenkins argocd helm deploy artifact registry continuous integration delivery", path: "devops/cicd.html" },
    { title: "SRE Principles", category: "DevOps", keywords: "sre sli slo sla error budget toil incident management postmortem chaos engineering dora metrics reliability", path: "devops/sre.html" },
    { title: "Observability", category: "DevOps", keywords: "observability metrics logs traces alerting use method red method golden signals three pillars", path: "devops/observability.html" },
    { title: "Terraform", category: "DevOps", keywords: "terraform state modules hcl plan apply providers resources data sources count for_each lifecycle workspaces drift", path: "devops/terraform.html" },
    { title: "Ansible", category: "DevOps", keywords: "ansible playbook role inventory module template vault idempotent agentless ssh handler jinja2", path: "devops/ansible.html" },

    // Infrastructure
    { title: "Linux & Networking", category: "Infrastructure", keywords: "linux processes namespaces cgroups tcp udp dns http load balancer circuit breaker vpc security groups", path: "infrastructure/linux-networking.html" },
    { title: "AWS Cloud", category: "Infrastructure", keywords: "aws eks ec2 s3 iam vpc rds lambda route53 cloudwatch alb nlb ebs efs fargate cost", path: "infrastructure/aws-cloud.html" },
    { title: "TLS & Certificates", category: "Infrastructure", keywords: "tls ssl https certificates cert-manager lets encrypt mtls openssl handshake public private key ca", path: "infrastructure/tls-certificates.html" },
    { title: "Databases", category: "Infrastructure", keywords: "database sql nosql postgresql mysql mongodb redis dynamodb replication sharding backup migration caching cap theorem", path: "infrastructure/databases.html" },
    { title: "Message Queues", category: "Infrastructure", keywords: "kafka rabbitmq sqs sns message queue pub sub event driven saga cqrs event sourcing consumer producer", path: "infrastructure/message-queues.html" },
    { title: "Cost & FinOps", category: "Infrastructure", keywords: "cost optimization finops spot instances reserved savings plans kubecost rightsizing tagging budget", path: "infrastructure/cost-finops.html" },
    { title: "Disaster Recovery", category: "Infrastructure", keywords: "disaster recovery rpo rto backup restore velero multi region active passive failover runbook chaos", path: "infrastructure/disaster-recovery.html" },

    // Application
    { title: "Microservices", category: "Application", keywords: "microservices monolith saga cqrs api gateway service discovery circuit breaker event driven decomposition ddd bounded context", path: "application/microservices.html" },
    { title: "API & REST", category: "Application", keywords: "api rest http methods status codes oauth jwt grpc graphql openapi swagger rate limiting cors authentication", path: "application/api-rest.html" },
    { title: "Bash & Python Scripting", category: "Application", keywords: "bash script python automation cron grep sed awk jq boto3 shell devops one-liner", path: "application/scripting.html" },
    { title: "Prometheus & Grafana", category: "Application", keywords: "prometheus grafana promql metrics counter gauge histogram alertmanager servicemonitor recording rules dashboards thanos", path: "application/prometheus-grafana.html" },
    { title: "Logging Stacks", category: "Application", keywords: "logging elk elasticsearch logstash kibana fluentd loki promtail logql structured logging correlation", path: "application/logging-stacks.html" },

    // Interview
    { title: "Interview Preparation", category: "Interview", keywords: "interview system design scenarios behavioral star format gotcha questions aws cloud preparation mock", path: "interview/interview-prep.html" },
];

function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/containers/') || path.includes('/kubernetes-core/') ||
        path.includes('/kubernetes-advanced/') || path.includes('/devops/') ||
        path.includes('/infrastructure/') || path.includes('/application/') ||
        path.includes('/interview/')) {
        return '../';
    }
    return '';
}

function performSearch(query) {
    const resultsContainer = document.querySelector('.search-results');
    if (!resultsContainer) return;

    if (!query || query.length < 2) {
        resultsContainer.classList.remove('active');
        return;
    }

    const terms = query.toLowerCase().split(/\s+/);
    const basePath = getBasePath();

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
            `<a href="${basePath}${item.path}">
                <span class="result-title">${item.title}</span>
                <span class="result-category">${item.category}</span>
            </a>`
        ).join('');
    }
    resultsContainer.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.search-input');
    const results = document.querySelector('.search-results');

    if (input) {
        input.addEventListener('input', function() {
            performSearch(this.value.trim());
        });

        input.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                this.value = '';
                results.classList.remove('active');
                this.blur();
            }
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-wrapper')) {
                results.classList.remove('active');
            }
        });
    }

    // Keyboard shortcut: / to focus search
    document.addEventListener('keydown', function(e) {
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            if (input) input.focus();
        }
    });
});
