# React Dashboard App

A data-driven interactive dashboard built with React, featuring charts, graphs, and real-time updates.

## Features

- **Interactive Charts**: Line charts, bar charts, and pie charts using Recharts
- **Real-time Data Updates**: Data refreshes with simulated API calls
- **Filtering & Sorting**: Filter by category and sort data in tables
- **Export Functionality**: Export data to CSV
- **Responsive Design**: Adapts to various screen sizes using Tailwind CSS

## Project Structure

```
dashboard-app/
│
├── public/              # Static files
│
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── charts/      # Chart components using Recharts
│   │   ├── dashboard/   # Dashboard-specific components
│   │   └── layout/      # Layout components
│   │
│   ├── pages/           # Page components
│   │   └── Dashboard.jsx
│   │
│   ├── utils/           # Utility functions
│   │   ├── dataUtils.js # Data manipulation utilities
│   │   └── exportUtils.js # Export functions
│   │
│   ├── hooks/           # Custom React hooks
│   │   └── useDashboardData.js
│   │
│   ├── constants/       # Application constants
│   │   └── chartConstants.js
│   │
│   ├── App.jsx          # Main application component
│   ├── index.js         # Application entry point
│   └── index.css        # Global styles with Tailwind
│
├── package.json
└── tailwind.config.js   # Tailwind CSS configuration
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Runs tests
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Technologies Used

- React
- Recharts for data visualization
- Tailwind CSS for styling
- Lucide React for icons

## Future Enhancements

- Add authentication
- Implement dark mode
- Connect to a real API
- Add more chart types
- Implement date range filtering