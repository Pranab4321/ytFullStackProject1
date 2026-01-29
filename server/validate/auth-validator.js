const z = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, "At least 3 char required")
    .max(255, "Name must not be more than 255 char"),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, "At least 3 char required")
    .max(255, "Email must not be more than 255 char"),

  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, "At least 10 char required")
    .max(20, "Number must not be more than 20 char"),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, "At least 6 char required")
    .max(1024, "Password must not be more than 1024 char"),
});

module.exports = signupSchema;
