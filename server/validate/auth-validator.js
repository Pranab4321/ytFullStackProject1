const z = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, "Name must be at least 3 char")
    .max(255, "Name must not be more than 255 char"),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Invalid email format")
    .min(3, "Email must be at least 3 char")
    .max(255, "Email must not be more than 255 char"),

  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, "Number must be at least 3 char")
    .max(20, "Number must not be more than 20 char"),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, "Password must be at least 6 char ")
    .max(1024, "Password must not be more than 1024 char"),
});


const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Invalid email format")
    .min(3, "Email must be at least 3 characters")
    .max(255, "Email must not be more than 255 characters"),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, "Password must be at least 6 characters")
    .max(1024, "Password must not be more than 1024 char"),
});

const contactSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(255, "Name must not be more than 255 characters"),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Invalid email format")
    .min(3, "Email must be at least 3 characters")
    .max(255, "Email must not be more than 255 characters"),

  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not be more than 1000 characters"),
});


module.exports = {
  signupSchema,
  loginSchema,
  contactSchema
};
