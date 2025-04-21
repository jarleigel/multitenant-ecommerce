GIT huskeliste:

- Bruker BUN - installer:
  curl -fsSL https://bun.sh/install | bash

Først lag NextJS prosjektet som vanlig:
bunx create-payload-app@3.33.0 --use-bun

bunx --bun shadcn@latest init
bunx --bun shadcn@latest add --all

git add .
git commit -m "01: setup"

Start:
git remote add origin git@github.com:jarleigel/multitenant-ecommerce.git
git branch -M main
git push -u origin main

Git rutiner pr kapittel:
git checkout -b 05-search-filters
