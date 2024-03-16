module.exports = NotesValidtionSchema = {
    title: {
        isString: true,
        isLength: {
            options: {
                min: 5,
            },
            errorMessage: "title must be atleast 5 characters."
        },
        notEmpty: {
            errorMessage: "Please enter valid title."
        },
    },
    description: {
        isString: true,
        isLength: {
            options: {
                min: 8,
            },
            errorMessage: "Description must be atleast 8 characters."
        },
        notEmpty: {
            errorMessage: "Please enter valid description."
        }
    }
};