import type { Registry } from "./schema";

export const component: Registry = [
    {
        name: "ai-input-01",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "components/eatechUI/ai-input/ai-input-01.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "ai-input-02",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "components/eatechUI/ai-input/ai-input-02.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-file-input.ts",
                type: "registry:hook",
            },
            {
                path: "hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "ai-input-03",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "components/eatechUI/ai-input/ai-input-03.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "ai-input-04",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "components/eatechUI/ai-input/ai-input-04.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "ai-input-05",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "components/eatechUI/ai-input/ai-input-05.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "btn-01",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/eatechUI/button/btn-01.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "btn-02",
        type: "registry:component",
        registryDependencies: ["button"],
        files: [
            {
                path: "components/eatechUI/button/btn-02.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "btn-03",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/eatechUI/button/btn-03.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "btn-04",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/eatechUI/button/btn-04.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "btn-05",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/eatechUI/button/btn-05.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "text-01",
        type: "registry:component",
        dependencies: [],
        files: [
            {
                path: "components/eatechUI/text/text-01.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "card-01",
        type: "registry:component",
        dependencies: [],
        registryDependencies: [],
        files: [
            {
                path: "components/eatechUI/card/card-01.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "card-02",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["button"],
        files: [
            {
                path: "components/eatechUI/card/card-02.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "card-03",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: [],
        files: [
            {
                path: "components/eatechUI/card/card-03.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "card-04",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: [],
        files: [
            {
                path: "components/eatechUI/card/card-04.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "card-05",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: [],
        files: [
            {
                path: "components/eatechUI/card/card-05.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "card-06",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: [],
        files: [
            {
                path: "components/eatechUI/card/card-06.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "pricing-01",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["button", "badge"],
        files: [
            {
                path: "components/eatechUI/pricing/pricing-01.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "alert-01",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: [],
        files: [
            {
                path: "components/eatechUI/alert/alert-01.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "alert-02",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["alert"],
        files: [
            {
                path: "components/eatechUI/alert/alert-02.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "alert-03",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/eatechUI/alert/alert-03.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "alert-04",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/eatechUI/alert/alert-04.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "alert-05",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: [],
        files: [
            {
                path: "components/eatechUI/alert/alert-05.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "input-01",
        type: "registry:component",
        dependencies: ["lucide-react"],
        files: [
            {
                path: "components/eatechUI/input/input-01.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "faq-01",
        type: "registry:component",
        registryDependencies: ["accordion"],
        dependencies: [],
        files: [
            {
                path: "components/eatechUI/faq/faq-01.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "list-01",
        type: "registry:component",
        registryDependencies: [],
        dependencies: ["lucide-react"],
        files: [
            {
                path: "components/eatechUI/list/list-01.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "hand-written-title",
        type: "registry:component",
        dependencies: ["motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/eatechUI/hand-written-title.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "action-search-bar",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["input"],
        files: [
            {
                path: "components/eatechUI/action-search-bar.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-debounce.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "background-circles",
        type: "registry:component",
        dependencies: ["motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/eatechUI/background-circles.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "background-paths",
        type: "registry:component",
        dependencies: ["motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/eatechUI/background-paths.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "vercel-v0-chat",
        type: "registry:component",
        dependencies: ["lucide-react", "textarea"],
        registryDependencies: [],
        files: [
            {
                path: "components/eatechUI/vercel-v0-chat.tsx",
                type: "registry:component",
            },
            {
                path: "hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "avatar-picker",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/eatechUI/avatar-picker.tsx",
                type: "registry:component",
            },
        ],
    },
];