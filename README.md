# odins-members-only

🧍 Login → 🔑 Passport checks credentials
        → 👜 serializeUser saves user ID
        → 🍪 Cookie with session ID sent to browser

🌍 New request → 🍪 Cookie sent
             → 🧠 Session ID found
             → 🧬 deserializeUser finds user
             → ✅ req.user available!