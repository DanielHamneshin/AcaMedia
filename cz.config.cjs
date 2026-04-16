module.exports = {
    types: [
        { value: "feat", name: "feat:     A new feature" },
        { value: "fix", name: "fix:      A bug fix" },
        { value: "chore", name: "chore:    Maintenance" },
        { value: "refactor", name: "refactor: Code change" }
    ],
    scopes: [
        { name: "ui" },
        { name: "api" },
        { name: "auth" },
        { name: "db" },
        { name: "deps" },
        { name: "project" }
    ]
};