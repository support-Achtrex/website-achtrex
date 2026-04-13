## **Project Overview**

This repository contains the source code for our website. The project follows a structured workflow designed to keep development organized, maintain clean code, and ensure smooth deployment to production.

---

## **Project Structure**

```
website-achtrex/
│
├── app/            # Next.js App Router root
│ ├── layout.tsx    # Root layout
│ ├── page.tsx      # Homepage
│ │
│ ├── about-us/     # About Us page
│ │ └── page.tsx
│ │
│ ├── services/     # Services page
│ │ └── page.tsx
│ │
│ ├── contact/      # Contact page
│ │ └── page.tsx
│ │
│ ├── life-at-achtrex/ # Life at Achtrex page
│ │ └── page.tsx
│ │
│ ├── portfolio/    # Portfolio page
│ └── page.tsx
│
├── components/     # Reusable UI components
│
├── utilities/      # Helper utilities, configs
│
├── hooks/          # Custom React hooks
│
├── public/         # Static assets
│
├── styles/         # Additional global styles
│
├── .env.example    # Example environment variables
│
├── package.json # Dependencies and scripts
│
└── README.md # Documentation
```

---

## **🛠️ Getting Started**

### **1. Clone the Repository**

```bash
git clone <repository-url>
cd project-folder
```

### **2. Install Dependencies**

```bash
npm install
```

or

```bash
yarn install
```

### **3. Set Up Environment Variables**

Copy the example file and fill in your credentials:

```bash
cp .env.example .env.local
```

Update variables inside `.env.local` based on your environment.

### **4. Run the Development Server**

```bash
npm run dev
```

Visit:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## **Branching Strategy**

Our development process uses four main branches:

### **📌 Main Branches**

* **`main`** → Production-ready code only
* **`dev`** → Pre-production branch. All approved work goes here before going live.

### **Developer Branches**

* **`elvis`** → Elvis' working branch
* **`ben`** → Ben's working branch

Developers should write and test code on their own branch.
No direct commit should go to `dev` or `main`.

---

## **🧭 Branch Rules**

### **1. Never push directly to `main` or `dev`**

All updates must come through Pull Requests.

### **2. Workflow**

1. **Pull the latest `dev` branch**

   ```bash
   git checkout dev
   git pull
   ```
2. **Switch to your branch and merge**

   ```bash
   git checkout elvis     # or ben
   git merge dev
   ```
3. Do your work, then push:

   ```bash
   git push origin elvis
   ```
4. Create a **Pull Request → elvis → dev**
5. Code will be reviewed before merging into `dev`

### **3. Deployment Flow**

```
elvis / ben  →  dev  →  main (production)
```

### **4. Commit Message Guidelines**

Use clean, descriptive commit messages:

* `feat: add sidebar navigation`
* `fix: resolve login redirect bug`
* `refactor: cleanup user service`
* `chore: update dependencies`

### **5. PR Rules**

* At least **1 approval** required
* Must pass build + lint checks
* Screenshots/videos required for UI changes
* No console.logs, debugger statements, or unused imports

---

## **🚀 Production Deployment**

Only code merged into `main` is deployed.
Merges into `main` should only happen after:

* Testing on the `dev` branch
* Approval from the team
* No critical issues detected
