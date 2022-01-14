const filters = [
    {
        id: 1,
        header: "Sem Offered",
        options:
            [
                {
                    id: 1,
                    name: "Jan",
                    class: "sem-offered-check"
                },

                {
                    id: 2,
                    name: "Jul",
                    class: "sem-offered-check"
                }
            ]
    },

    {
        id: 2,
        header: "Credit Units",
        options:
            [
                {
                    id: 1,
                    name: 2.5,
                    class: "cu-check"
                },

                {
                    id: 2,
                    name: 5,
                    class: "cu-check"
                },

                {
                    id: 3,
                    name: 10,
                    class: "cu-check"
                }
            ]
    }, 

    {
        id: 3,
        header: "Major Programme",
        options:
            [
                {
                    id: 1,
                    name: "Accounting",
                    class: "major-check"
                },

                {
                    id: 2,
                    name: "Business Analytics",
                    class: "major-check"
                },

                {
                    id: 3,
                    name: "Finance",
                    class: "major-check"
                }
            ]
    }, 

    {
        id: 4,
        header: "Minor Programme",
        options:
            [
                {
                    id: 1,
                    name: "Accounting",
                    class: "minor-check"
                },

                {
                    id: 2,
                    name: "Analytics",
                    class: "minor-check"
                },

                {
                    id: 3,
                    name: "Chinese Language",
                    class: "minor-check"
                }
            ]
    }
]

export default filters;
