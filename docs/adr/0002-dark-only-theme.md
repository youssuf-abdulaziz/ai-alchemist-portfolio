# Dark-only visual theme

The portfolio ships dark-only. We removed `next-themes`, the `ThemeProvider`, and the `d`-keypress theme toggle rather than offering a light mode. The design language ("Digital Noir Alchemist") is defined entirely around layered dark surfaces, electric accent bursts, and text off-whites; a light variant is neither designed nor desired. Keeping a single theme also removes hydration styling complexity and a runtime dependency.
