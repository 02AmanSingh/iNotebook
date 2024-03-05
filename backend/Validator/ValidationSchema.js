module.exports =  UservalidationSchema = {
    name: {
        isString: true,
        isLength: {
            options: {
                min: 5,
                max: 15,
            },
            errorMessage: "Size must be 5 or more than it.",
        },
        notEmpty: {
            errorMessage: "Name must not be empty.",
        },
    },
    email: {
        isString: true,
        errorMessage: "Must have valid email.",
        isEmail: true,
    },
    password: {
        isLength:{ 
            options : {
                min: 8,
                max: 15,
            },
            errorMessage: "lenght must be 8 characters more than it."
        },
    }
};

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