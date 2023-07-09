import GoogleStrategies from "passport-google-oauth20";
import passport from "passport";
import dotenv from "dotenv";
import User from "../models/User.js"

dotenv.config()

const GoogleStrategy = GoogleStrategies.Strategy

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/api/auth/google/callback",
            scope: ["profile"]
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
              // Verifique se o usuário já existe no banco de dados com base no email fornecido pelo Google
              const existingUser = await User.findOne({ email: profile.emails[0].value });
              if (existingUser) {
                // Se o usuário existir, faça o login dele
                done(null, existingUser);
              } else {
                // Se o usuário não existir, crie um novo usuário no banco de dados com os detalhes do perfil do Google
                const newUser = new User({
                  username: profile.displayName,
                  email: profile.emails[0].value,
                  password: "gmail", // Preencha com um valor padrão ou gere uma senha aleatória se necessário
                  country: "gmail", // Preencha com um valor padrão ou deixe vazio se não estiver disponível no perfil do Google
                  city: "gmail", // Preencha com um valor padrão ou deixe vazio se não estiver disponível no perfil do Google
                  phone: "gmail", // Preencha com um valor padrão ou deixe vazio se não estiver disponível no perfil do Google
                });
      
                // Salve o novo usuário no banco de dados
                await newUser.save();
      
                // Faça o login do novo usuário
                done(null, newUser);
              }
            } catch (error) {
              done(error, null);
            }
          }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

export default passport;