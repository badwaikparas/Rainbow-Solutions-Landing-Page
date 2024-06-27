const z = require('zod')

const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: "Name must be of atleast 3 characters" })
        .max(255, { message: "Name must not be more than 255 characteres" })
        .required({ message: "Name not defined" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Email is required" })
        .min(3, { message: "Email must be of atleast 3 characters" })
        .max(255, { message: "Email must not be more than 255 characteres" })
        .required({ message: "Email not defined" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be of atleast 10 characters" })
        .max(20, { message: "Phone must not be more than 20 characteres" })
        .required({ message: "phone no. not defined" }),
    complexity: z
        .string({ required_error: "complexity is required" })
        .trim()
        .required({ message: "Complexity not defined" }),
    message: z
        .string()
        .required({ message: "Privilages not defined" }),
})

module.exports = contactSchema