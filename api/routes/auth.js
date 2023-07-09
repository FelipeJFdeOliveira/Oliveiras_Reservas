import express from "express"
import dotenv from "dotenv"
import { register, login } from "../controllers/auth.js"
import passport from "passport"

const router = express.Router()

dotenv.config()

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "sucesso",
      user: req.user,
      cookies: req.cookies,
    });
  }
}); 

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "falha",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"]}));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.post("/register", register)
router.post("/login", login)

export default router