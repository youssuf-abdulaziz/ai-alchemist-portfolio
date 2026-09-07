# Intersection Observer scroll reveals (no animation library)

All structural scroll animations (section reveals, card staggers, title wipes) are triggered by adding CSS classes via an Intersection Observer hook, per the design brief's explicit instruction — not via an animation library such as framer-motion. This adds zero runtime dependencies, keeps the bundle lean for a portfolio that must load fast, and matches the brief's stated mechanism.
